import _ from "lodash";
import { IUser } from "../../App";

export function useSelectItem({
  state,
  setCart,
}: {
  state: IUser;
  setCart: React.Dispatch<React.SetStateAction<IUser>>;
}) {
  const selectItem = (idItem: string) => {
    const index = _.findIndex(state.cart, {
      idItem: idItem,
    });
    if (state.cart.some((val) => val.idItem === idItem)) {
      let newArray = [...state.cart];
      newArray[index] = {
        ...newArray[index],
        countItem: newArray[index].countItem + 1,
      };
      return setCart((state) => ({
        ...state,
        cart: newArray,
      }));
    } else {
      return setCart((state) => ({
        ...state,
        cart: state.cart.concat({
          idItem: idItem,
          countItem: 1,
        }),
      }));
    }
  };

  return { selectItem };
}
