import { makeEntity } from "react-entities";
import * as mustRead from "./mustRead";
import * as filter from "./filter";
import * as detail from "./detail";
import * as modal from "./modal";
export const useMustRead = makeEntity(mustRead);
export const useFilter = makeEntity(filter);
export const useDetail = makeEntity(detail);
export const useModal = makeEntity(modal);
