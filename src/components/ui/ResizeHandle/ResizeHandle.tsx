import { PanelResizeHandle } from 'react-resizable-panels'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGripVertical,
  faGripHorizontal,
} from '@fortawesome/free-solid-svg-icons'

export default function ResizeHandle({ id }: { id?: string }) {
  return (
    <PanelResizeHandle
      // className={[styles.ResizeHandleOuter, className].join(" ")}
      className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90
      bg-borderr"
      id={id}
    >
      <div
        // className={styles.ResizeHandleInner}
        className="z-10 flex h-4 w-3 items-center justify-center rounded-sm"
      >
        <div className="border-1 border-borderr px-1 rounded-md bg-card-bg">
          <FontAwesomeIcon icon={faGripVertical} />
        </div>
        {/* <svg 
        className={styles.Icon}
         viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg> */}
      </div>
    </PanelResizeHandle>
  )
}
