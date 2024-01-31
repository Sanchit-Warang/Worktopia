'use client'
import { Panel, PanelGroup } from 'react-resizable-panels'
import ResizeHandle from '@/components/ui/ResizeHandle/ResizeHandle'
import Editor from '@monaco-editor/react'
import { useTheme } from 'next-themes'
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'
import { useState } from 'react'

const TechRoundPage = () => {
  const { theme } = useTheme()
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>Hi Sanchit</TerminalOutput>
  ]);
  return (
    <PanelGroup direction="horizontal" className="h-full">
      <Panel minSize={10}>Question</Panel>
      <ResizeHandle />
      <Panel minSize={10}>
        <PanelGroup direction="vertical">
          <Panel minSize={10}>
            <Editor
              height="100%"
              theme={`vs-${theme}`}
              defaultLanguage="javascript"
              defaultValue="// some comment"
            />
          </Panel>
          <ResizeHandle />
          <Panel minSize={10}>
            <div className="container">
              <Terminal
                name="Terminal"
                colorMode={ColorMode.Dark}
                onInput={(terminalInput) =>
                  console.log(`New terminal input received: '${terminalInput}'`)
                }
              >
                {terminalLineData}
                
              </Terminal>
            </div>
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  )
}

export default TechRoundPage
