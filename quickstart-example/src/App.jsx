import { useCallback } from "react";
import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";

import '@xyflow/react/dist/style.css';

const initalNodes = [
  {
    id: '1',
    // type: 'input',
    data: { label: 'Node 1' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    // type: 'default',
    data: { label: 'Node 2' },
    position: { x: 0, y: 100 },
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' }
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initalNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
      >
      {/* <MiniMap /> */}
      <Controls />
      <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
  </div>
  )
}

export default App
