import { useState } from "react";
import "./App.css";
import {
  Button,
  Card,
  FlexLayout,
  H1,
  SaltProvider,
  StackLayout,
  Text,
} from "@salt-ds/core";
import { InsertionPointProvider } from "@salt-ds/styles";
import "@salt-ds/theme/index.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <SaltProvider mode={mode}>
      <InsertionPointProvider insertionPoint={document.head.lastChild}>
        <div className="flex flex-col max-w-[600px] mx-auto gap-4 p-[--salt-spacing-300]">
          <H1 className="text-status-error text-center">Tailwind + Salt</H1>
          <div className="flex flex-col gap-3 p-spacing-300 bg-container-primary border border-solid border-container-primary shadow-overlayable">
            <Button
              onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
            >
              Toggle theme: {mode}
            </Button>
            <Text>
              Edit <code>src/App.tsx</code> and save to test HMR
            </Text>
          </div>
          <Card>
            <StackLayout gap={2}>
              <div className="flex gap-2 justify-center">
                <Button variant="cta">CTA</Button>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
              <FlexLayout gap={2} justify="center">
                <Button variant="cta">CTA</Button>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </FlexLayout>
            </StackLayout>
          </Card>

          <p>Click on the Vite and React logos to learn more</p>
        </div>
      </InsertionPointProvider>
    </SaltProvider>
  );
}

export default App;
