import { useRef, useState , useEffect } from "react";

export default function useHeight(){
    const node = useRef<any>(null);
	const [height , setHeight] = useState("100%");

    useEffect(() => {
		setHeight(`${node.current.clientHeight}px`);
	},[]);

    return{
        height,
        node
    }
}