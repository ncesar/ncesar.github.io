google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Mover', '1 K = 1000 reais'],
    ["Empresa X", 5500],
    ["Empresa Y", 5000],
    ["Empresa Z", 3000],
    ["Empresa W", 1000],
    ['Outros contratos', 500]
  ]);

  var options = {
    width: 800,
    legend: { position: 'none' },
    chart: {
      title: 'Valores dos contratos',
      subtitle: 'sorteados do maior para o menor' },
    axes: {
      x: {
        0: { side: 'top', label: 'Contratos'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
