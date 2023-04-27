import { OrderListPipe } from './order-list.pipe';
import * as dataRaw from '@data/tracks.json';
import {TrackModel} from '@core/models/tracks.model'

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testing Input and Output values',()=>{
    //Arrange
    const pipe = new OrderListPipe();
    const {data}:any = (dataRaw as any).default

    //Act
    const result:TrackModel[]=pipe.transform(data)

    //Assert
    expect(result).toEqual(data)

  });

  it('Testing rigth ASC ordering list',()=>{
    //Arrange
    const pipe = new OrderListPipe();
    const {data}:any = (dataRaw as any).default
    const firstValue = data.find((i:any)=>i._id===7)
    const lastValue = data.find((i:any)=>i._id===6)

    //Act
    const result:TrackModel[]=pipe.transform(data,'name','asc')
    const firtsResult=result[0]
    const lastResult=result[result.length-1]

    //Assert
    expect(firtsResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)

  });

  it('Testing rigth DESC ordering list',()=>{
    //Arrange
    const pipe = new OrderListPipe();
    const {data}:any = (dataRaw as any).default
    const firstValue = data.find((i:any)=>i._id===7)
    const lastValue = data.find((i:any)=>i._id===6)

    //Act
    const result:TrackModel[]=pipe.transform(data,'name','desc')
    const firtsResult=result[0]
    const lastResult=result[result.length-1]

    //Assert
    expect(firtsResult).toEqual(lastValue)
    expect(lastResult).toEqual(firstValue)

  })



});
