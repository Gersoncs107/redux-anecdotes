import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return ""
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions
//     borderWidth: 1,
//     marginBottom: 10
//   }

//   return <div style={style}>render here notification...</div>
// }

// export default Notification
