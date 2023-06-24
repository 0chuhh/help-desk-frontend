import { CSSProperties, FC, useEffect, useState } from 'react'
import type { DropTargetMonitor } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import React from 'react';



export interface CustomFileInputProps {
    onDrop: (item: { files: any[] }) => void
  }

const CustomFileInput:FC<CustomFileInputProps> = ({onDrop}) => {
    const [isActive, setIsActive] = useState(false)
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
          accept: [NativeTypes.FILE],
          drop(item: { files: any[] }) {
            if (onDrop) {
              onDrop(item)
            }
          },
          canDrop(item: any) {
            return true
          },
          hover(item: any) {
          },
          collect: (monitor: DropTargetMonitor) => {
            const item = monitor.getItem() as any
            return {
              isOver: monitor.isOver(),
              canDrop: monitor.canDrop(),
            }
          },
        }),
        [],
      )
      useEffect(()=>{
        setIsActive(canDrop && isOver)
      },[canDrop,isOver])
  return (
    <div ref={drop} style={{
      border: isActive ? '1px solid blue':'1px dashed gray',
      height: '60px',
      width: '100%',
      padding: '20px',
      color:isActive?'blue':'black',
      boxSizing:'border-box',
      transition:'all 0.3s ease',
      textAlign: 'center',
    }}>
      {isActive ? 'Отпустите для загрузки' : 'Перетащите файл сюда'}
    </div>
  )
}

export default React.memo(CustomFileInput)