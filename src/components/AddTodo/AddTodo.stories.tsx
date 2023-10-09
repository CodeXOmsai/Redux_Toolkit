import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
  title: "Components/AddTodo",
  component: AddTodo,
};

interface TemplateProps {
  // Define prop types here if needed
  backgroundColor: string;
  color: string;
  label: string;
  args: string;
}

const Template: React.FC<TemplateProps> = (args) => (
  <Provider store={store}>
    {" "}
    {/* Provide the Redux store */}
    <AddTodo {...args} />
  </Provider>
);

export const AddTodoStory = Template.bind({});
AddTodoStory.args = {
  backgroundColor: "bg-gray-800",
  color: "text-gray-100",
  label: "Add Todo",
};
