import { list } from './themesList'
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()
const { API_KEY, PASSWORD, SHOP } = process.env

const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const removeTheme = async (themeId: Number) => {
    try {
        await delay(200)
        console.log('Removing theme: ', themeId)
        const addr = `https://${API_KEY}:${PASSWORD}@${SHOP}/admin/api/2021-04/themes/${themeId}.json`
        const data = await axios.delete(addr)
        data.statusText === 'OK' && console.log('Theme removed: ', themeId)
    } catch (error) {
        console.error('Unable to remove theme: ', error)
    }
}

const main = () => {
    console.log('Starting removal of themes...')
    list.forEach((id, index) => {
        removeTheme(id)
    })
    console.log('Removal complete.')
}

main()
