import { Row } from "../components";

export const keywordFilter = (keyword: string) => (data: Row[]) => 
  data.filter(row => row.country.toLowerCase().includes(keyword.toLowerCase()) 
   || row.username.toLowerCase().includes(keyword.toLowerCase())
   || row.name.toLowerCase().includes(keyword.toLowerCase()))

