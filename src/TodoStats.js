import React, { PropTypes } from 'react'

import Chart from 'chart.js'

import Statuses from './Statuses'

class TodoStats extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
  }

  componentWillReceiveProps(nextProps) {
    var ctx = document.getElementById("myChart");

    const counters = { NEW: 0, IN_PROGRESS: 0, DONE: 0 }
    nextProps.todos.forEach(t => counters[t.status] += 1)

    var data = {
        labels: Object.keys(Statuses),
        datasets: [
            {
                data: [counters.NEW, counters.IN_PROGRESS, counters.DONE],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    var options = {}

    this.myChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
  }

  componentWillUnmount() {
    this.myChart.destroy()
    this.myChart = null
  }

  render () {
    return (
      <div>
        <p>{`${this.props.todos.length} TODOs`}</p>
        <canvas id="myChart" style={{width: 200, height: 200}}></canvas>
      </div>
    )
  }
}

export default TodoStats;
