import {Button, Switch, Tag} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {v4 as uuidv4} from "uuid"

import {ToppingColors} from "./constant/colorMap"
import {addTopping, toggleGluten} from "./store/reducers/pizzaSlice"

import type {RootState} from "./store";
const App = () => {
  const Toppings = [
    "pepperoni",
    "sausage",
    "onion",
    "mushroom",
    "olive",
    "jalapeno",
    "tomato",
    "basil",
    "anchovy",
    "pineapple",
    "bacon",
  ];
  const {toppings, gluten} = useSelector((state: RootState) => state.pizza);
  const dispatch = useDispatch();
  const onClick = (topping: string) => {
    dispatch(addTopping(topping));
  };
  const onChange = () => {
    dispatch(toggleGluten());
  };

  return (
    <div className="content">
      <h1>Pizza</h1>
      <div className="toppings">
        {toppings.map((ele) => (
          <Tag key={uuidv4()} color={ToppingColors[ele]}>
            {ele}
          </Tag>
        ))}
      </div>
      <Switch
        checkedChildren="Gluten true"
        unCheckedChildren="Gluten off"
        checked={gluten}
        onChange={onChange}
      />
      <div className="btn-wrap">
        {Toppings.map((ele) => (
          <Button type="primary" key={ele} onClick={() => onClick(ele)}>
            Add {ele}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default App;
