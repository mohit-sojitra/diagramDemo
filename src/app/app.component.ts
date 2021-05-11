import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  NodeModel,
  ConnectorModel,
  LinearGradientModel,
} from '@syncfusion/ej2-angular-diagrams';
import { connecterModel, DiagramModel, nodeModel } from './diagram.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public DiagramData: DiagramModel;

  @ViewChild('diagram')
  public diagram: DiagramComponent;
  title = 'diagramDemo';

  public linearGradient: LinearGradientModel = {
    x1: 0,
    y1: 0,
    x2: 50,
    y2: 50,
    stops: [
      {
        color: 'white',
        offset: 0,
      },
      {
        color: '#6BA5D7',
        offset: 100,
      },
    ],
    type: 'Linear',
  };

  public node: NodeModel = {
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    borderWidth: 10,
    style: {
      fill: '#cbcac4',
      strokeColor: 'white',
      gradient: this.linearGradient,
    },
  };

  public connectors: ConnectorModel = {
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
  };

  public addNode() {
    this.diagram.add(this.node);
  }

  public addConnector() {
    this.diagram.add(this.connectors);
  }

  valuechange($event) {
    var nodeList: nodeModel[] = [];
    var connectorList: connecterModel[] = [];
    this.diagram.nodes.forEach((element) => {
      const nodeData: nodeModel = {
        id: element.id,
        name: element.annotations[0] ? element.annotations[0].content : '',
        height: element.height,
        width: element.width,
        offsetX: element.offsetX,
        offsetY: element.offsetY,
      };
      nodeList.push(nodeData);
    });

    this.diagram.connectors.forEach((element) => {
      const connectorData: connecterModel = {
        id: element.id,
        name: element.annotations[0] ? element.annotations[0].content : '',
        sourceId: element.sourceID,
        destinationId: element.targetID,
      };
      connectorList.push(connectorData);
    });

    this.DiagramData = {
      nodes: nodeList,
      connectors: connectorList,
    };
    console.log(this.DiagramData);
  }
}
