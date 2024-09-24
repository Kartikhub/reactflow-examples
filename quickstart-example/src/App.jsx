import { useCallback, useMemo } from "react";
import { addEdge, Background, Controls, MiniMap, Panel, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";

import '@xyflow/react/dist/style.css';
import { TextUpdateNode } from "./components/TextUpdateNode";


const initalNodes = [
  {
    id: '1',
    type: 'textUpdater',
    data: { value: 123 },
    position: { x: 100, y: 25 },
  },
  {
    id: '2',
    // type: 'default',
    data: { label: <div style={{ color: 'blue' }}>Default Node</div> },
    position: { x: 100, y: 125 },
  }, 
  {
   id: '3',
   type: 'output',
   data: { label: 'Output Node' },
   position: { x: 250, y: 250 },
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true }
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initalNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdateNode }), []);


  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  return (
  <div style={{width: '100vw', 'height': '100vh'}}> 
      <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      >
      {/* <MiniMap /> */}
      <Controls />
      <Background variant="dots" gap={12} size={1} />
      <Panel position="top-right">
        <div style={{ padding: 8 }}>
          <button onClick={() => setNodes((nds) => nds.map((n) => ({ ...n, data: { ...n.data, label: n.data.label === 'Default Node' ? 'Input Node' : 'Default Node' } })))}>Change Node Type</button>
        </div>
      </Panel>
      </ReactFlow>
  </div>
  )
}

export default App
