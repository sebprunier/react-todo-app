import React, { PropTypes } from 'react'

import Chart from 'chart.js'

import Statuses from './Statuses'

class TodoStats extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
  }

  componentWillReceiveProps(nextProps) {
    const counters = { NEW: 0, IN_PROGRESS: 0, DONE: 0 }
    nextProps.todos.forEach(t => counters[t.status] += 1)

    const data = {
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

    var options = {
      responsive: true
    }

    if (this.statusesChart) {
        this.statusesChart.destroy()
        this.statusesChart = null
    }
    this.statusesChart = new Chart(this.chartCanvas,{
        type: 'pie',
        data: data,
        options: options
    });
  }

  componentWillUnmount() {
    this.statusesChart.destroy()
    this.statusesChart = null
  }

  render () {
    return (
      <div>
        <p>{`${this.props.todos.length} TODOs`}</p>
        <canvas ref={(canvas) => { this.chartCanvas = canvas }}></canvas>
      </div>
    )
  }
}

export default TodoStats;
