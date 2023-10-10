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

const Template: React.FC<TemplateProps> = () => (
  <Provider store={store}>
    {" "}
    {/* Provide the Redux store */}
    <AddTodo />
  </Provider>
);

export const AddTodoStory = Template.bind({});

