import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default {
  title: "Components/Todo",
  component: Todo,
};

export const AddTodoStory = () => (
  <Provider store={store}>
    {" "}
    {/* Provide the Redux store */}
    <Todo />
  </Provider>
);
