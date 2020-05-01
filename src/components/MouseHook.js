import React,{useState,useEffect} from 'react';

function MouseHook(props) {
    const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)
    return ()=>{                                              //It Simply Unmount your component
     console.log('component did unmount ')
     window.removeEventListener('mousemove', logMousePosition)
    }

    
	}, [])                    //Second Empty Argument shows how we make equal componentdidmount equal to useEffect eg Run or Render  Only Once 
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default MouseHook;