import type { CSSProperties, FC } from 'react'
import type { DropTargetMonitor } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import UploadFileIcon from '@mui/icons-material/UploadFile';

const style: CSSProperties = {
    border: '1px dashed gray',
    height: '50px',
    width: '100%',
    padding: '2rem',
    boxSizing:'border-box',
    textAlign: 'center',
  }

export interface CustomFileInputProps {
    onDrop: (item: { files: any[] }) => void
  }

const CustomFileInput:FC<CustomFileInputProps> = ({onDrop}) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
          accept: [NativeTypes.FILE],
          drop(item: { files: any[] }) {
            if (onDrop) {
              onDrop(item)
            }
          },
          canDrop(item: any) {
            console.log('canDrop', item.files, item.items)
            return true
          },
          hover(item: any) {
            console.log('hover', item.files, item.items)
          },
          collect: (monitor: DropTargetMonitor) => {
            const item = monitor.getItem() as any
            if (item) {
              console.log('collect', item.files, item.items)
            }
    
            return {
              isOver: monitor.isOver(),
              canDrop: monitor.canDrop(),
            }
          },
        }),
        [],
      )
      const isActive = canDrop && isOver
  return (
    <div ref={drop} style={style}>
      {isActive ? 'Отпустите для загрузки' : 'Перетащите файл сюда'}
    </div>
  )
}

export default CustomFileInput