import React from 'react'
import { Drawer } from '@mui/material'
import SidebarItem from './SideBarItem'

const SideBar = (props) => {
  const { open, setOpen } = props

  return (
    <>
      <Drawer open={open} anchor='left' onClose={() => setOpen(!open)}>
        <SidebarItem open={open} setOpen={setOpen} />
      </Drawer>
    </>
  )
}

export default SideBar
