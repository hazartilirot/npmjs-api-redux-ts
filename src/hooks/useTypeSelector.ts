import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";
/*we did as docs states to do in the case
https://react-redux.js.org/using-react-redux/static-typing */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector