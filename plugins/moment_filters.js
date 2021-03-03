import Vue from 'vue'
import moment from 'moment'

// filters depending on momentjs plugin
Vue.filter('formatUnix', (val) => {
  if (val) {
    return moment.unix(val).format('DD-MM-YYYY')
  }
})

Vue.filter('formatTimestamp', (val) => {
  if (val) {
    return moment(val, 'YYYY/MM/DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
  }
})

Vue.filter('formatTimestampFr', (val) => {
  if (val) {
    return moment(val, 'YYYY/MM/DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss')
  }
})

Vue.filter('year', (val) => {
  if (val) {
    return moment.unix(val).format('YY')
  }
})

Vue.filter('yearLong', (val) => {
  if (val) {
    return moment.unix(val).format('YY')
  }
})

Vue.filter('day', (val) => {
  if (val) {
    return moment.unix(val).format('DD')
  }
})

Vue.filter('month', (val) => {
  if (val) {
    return moment.unix(val).format('MM')
  }
})

Vue.filter('monthLong', (val) => {
  if (val) {
    return moment.unix(val).format('MMMM')
  }
})

Vue.filter('time', (val) => {
  if (val) {
    return moment.unix(val).format('h:mm')
  }
})

Vue.filter('dayLong', (val) => {
  if (val) {
    return moment.unix(val).format('dddd')
  }
})

Vue.filter('timeAgo', (val) => {
  if (val) {
    return moment.unix(val).fromNow()
  }
})

Vue.filter('timeAgoTS', (val) => {
  if (val) {
    return moment(val).fromNow()
  }
})
