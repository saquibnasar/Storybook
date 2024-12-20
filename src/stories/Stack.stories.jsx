import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: { numberOfChildren: { type: "number", defaultValue: 4 } },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((i) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // key={i}
      >
        {i + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  numberOfChildren: 4,
  direction: "row",
  spacing: 2,
  wrap: false,
};
