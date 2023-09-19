import { data } from "./data.js";
let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let id = params.get('id')
// id = icd ,milk ,yogurt
let milkData = data.milk
let iceData = data.ice
let yogurtData = data.yogurt
let allData =[...milkData,...iceData,...yogurtData]




