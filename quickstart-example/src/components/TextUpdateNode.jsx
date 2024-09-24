import { Handle, Position } from "@xyflow/react";
import { useCallback } from "react";

export function TextUpdateNode({ data }) {
    const onChange = useCallback((event) => {
        console.log(event.target.value);
    }, []);
 
    return (
    <div style={{ height: 40, border: '1px solid #777', background: '#ffffff',  padding: 10, textAlign: 'center' }}>
        <Handle type="target" position={Position.Top} />
        <div style={{ padding: 5 }}>
            <label htmlFor="text">Text:</label>
            <input id="text" name="text" onChange={onChange} className="nodrag" value={data.value} style={{ border: '1 px solid #777' }} />
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10}} /> 
    </div>
  );
}
