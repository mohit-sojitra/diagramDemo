export interface DiagramModel {
  nodes?:nodeModel[];
  connectors?:connecterModel[];
}

export interface nodeModel {
  id: string;
  name : string;
  offsetX : number;
  offsetY : number;
  height : number;
  width : number;
}

export interface connecterModel {
  id: string;
  name : string;
  sourceId : string;
  destinationId : string;
}
