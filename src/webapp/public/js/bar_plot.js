function barPlot(data) {
    console.log(data);
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(function() {
        $('.service-usage-graph').each(function() {

            var table = new google.visualization.DataTable();
            table.addColumn('string', 'Property');
            table.addColumn('number', 'UL Peak');
            table.addColumn('number', 'UL Off-peak');

            table.addRow(['Carboidrato', 100 * data["carbohydrates"] / 300, 100*(1 - data["carbohydrates"] / 300)]);
            table.addRow(['Gordura', 100 * data["fat"] / 65, 100*(1 - data["fat"] / 65)]);
            table.addRow(['Proteína', 100 * data["proteins"] / 50, 100*(1 - data["proteins"] / 50)]);
            table.addRow(['Colesterol', 100 * data["cholesterol"] / 0.003, 100*(1 - data["cholesterol"] / 0.003)]);
            var chart = new google.charts.Bar(this);
            var options = google.charts.Bar.convertOptions({
                series: {
                    2: { color: '#0EBDD9', targetAxisIndex: 1 },
                    3: { color: '#C5EFEE', targetAxisIndex: 1 }
                },
                vAxis: {
                    viewWindow: {
                        max: 100,
                    },
                    title: '',
                },
                legend: { position: 'none' },
                hAxis: {
                    title: '',
                },
                bar: {groupWidth: "60%"},
                title: '',
                isStacked: true,
            });
            chart.draw(table, options);
        });
    });
}