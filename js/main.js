const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

const svg = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500);

svg.selectAll('circle')
    .data(sandwiches)
    .enter()
    .append('circle')
    .style('fill', d => {
        if (d.price <= 7.00)
            return 'green';
        else
            return 'yellow';
    })
    .attr('r', d => {
        if (d.size == "large")
            return 30;
        else
            return 15;
    })
    .attr('cy', 85)
    .attr('cx', (d,index) => (index*80)+30)
    .attr('stroke', 'black');