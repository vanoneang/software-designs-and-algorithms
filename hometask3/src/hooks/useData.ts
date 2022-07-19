import { useEffect, useState } from "react";
import { getImages, getUsers, getAccounts } from '../mocks/api';
import { dataConverter } from "../utils/dataConvert";

import type { Row } from "../components";
import type { Image, User, Account } from '../../types';

export const useData = () => {
  const [data, setData] = useState<Row[]>([]);

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        setData(dataConverter(users, accounts, images));
      }
    );
  }, [])

  return data;
}