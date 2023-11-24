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
  Density,
  Mode,
  H2,
  Input,
  FlexItem,
  Avatar,
  H3,
  FormField,
  FormFieldLabel,
  StatusIndicator,
  Switch,
} from "@salt-ds/core";
import { CloseIcon, OverflowMenuIcon } from "@salt-ds/icons";
import "./theme.css";

function App() {
  const [mode, setMode] = useState<Mode>("light");
  return (
    <SaltProvider enableStyleInjection={false} mode={mode}>
      <FlexLayout>
        <Body mode={mode} setMode={setMode} />
        <Body mode={mode} setMode={setMode} theme="play" density="low" />
      </FlexLayout>
    </SaltProvider>
  );
}

export default App;

function Body({
  mode,
  setMode,
  theme,
  density,
}: {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  theme?: string;
  density?: Density;
}) {
  return (
    <SaltProvider
      enableStyleInjection={false}
      mode={mode}
      theme={theme}
      density={density}
    >
      <div className="flex flex-col max-w-[600px] mx-auto gap-4 p-[--salt-spacing-300]">
        <H1 styleAs="display1">
          <strong>This is Salt</strong>
        </H1>
        <div className="flex flex-col gap-3 p-spacing-300 bg-container-primary border border-solid border-container-primary shadow-overlayable rounded-[--saltCard-borderRadius]">
          <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            Toggle theme: {mode}
          </Button>
        </div>

        <Card>
          <StackLayout>
            <StackLayout gap={1}>
              <H2>Your team</H2>
              <Text>Invite and manage your team members.</Text>

              <FlexLayout gap={1}>
                <Input placeholder="Email address" />
                <Button variant="cta">Invite</Button>
              </FlexLayout>
            </StackLayout>
            <StackLayout gap={2} separators>
              {[1, 2, 3, 4].map((i) => (
                <FlexLayout key={i} gap={2} align="center">
                  <Avatar
                    size={1}
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=faces&amp;fit=crop"
                  />
                  <FlexItem grow={1}>
                    <Text>emmeline.labrie@example.com</Text>
                  </FlexItem>
                  <SaltProvider density="high">
                    <Button variant="secondary">
                      <OverflowMenuIcon />
                    </Button>
                  </SaltProvider>
                </FlexLayout>
              ))}
            </StackLayout>
          </StackLayout>
        </Card>

        <Card>
          <StackLayout>
            <StackLayout gap={5} separators>
              <StackLayout gap={1}>
                <H2>Notifications</H2>
                <Text>Manage your notification settings.</Text>
              </StackLayout>
              <StackLayout gap={2} separators>
                {[1, 2, 3].map((i) => (
                  <FlexLayout key={i} gap={2} align="start">
                    <FlexItem grow={1}>
                      <StackLayout gap={0}>
                        <H3>Comments</H3>
                        <Text>
                          Receive notifications when someone comments on your
                          documents or mentions you.
                        </Text>
                      </StackLayout>
                    </FlexItem>
                    <StackLayout gap={1}>
                      <Switch label="SMS" />
                      <Switch label="Email" />
                      <Switch label="Push" />
                    </StackLayout>
                  </FlexLayout>
                ))}
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </Card>

        <Card>
          <StackLayout>
            <H2>Sign Up</H2>
            <StackLayout gap={1}>
              <FormField>
                <FormFieldLabel>Email</FormFieldLabel>
                <Input />
              </FormField>

              <FormField>
                <FormFieldLabel>Password</FormFieldLabel>
                <Input />
              </FormField>

              <FlexLayout gap={1} justify="end">
                <Button variant="primary">Create an account</Button>
                <Button variant="cta">Sign in</Button>
              </FlexLayout>
            </StackLayout>
          </StackLayout>
        </Card>

        <Card className="relative">
          <StackLayout align="center" gap={2}>
            <span />
            <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[--salt-status-success-background]">
              <StatusIndicator status="success" size={2} />
            </div>
            <StackLayout align="center" gap={1}>
              <H2>Invoice paid</H2>
              <Text align="center" styleAs="h4">
                You paid $17,975.30. A receipt copy was sent to{" "}
                <strong>accounting@example.com</strong>
              </Text>
            </StackLayout>
            <span />
          </StackLayout>

          <Button variant="secondary" className="absolute top-2 right-2">
            <CloseIcon />
          </Button>
        </Card>
      </div>
    </SaltProvider>
  );
}
