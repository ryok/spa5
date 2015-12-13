var spa5;
(function (spa5) {
    'use strict';
    var CpuController = (function () {
        function CpuController($state) {
            this.state = $state;
            this.cpuChartOptions = {
                title: {
                    text: 'CPU Usage (%)'
                },
                legend: {
                    position: 'bottom'
                },
                chartArea: {
                    background: ''
                },
                seriesDefaults: {
                    type: 'line',
                    style: 'smooth'
                },
                series: [{
                        name: 'India',
                        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
                    }, {
                        name: 'World',
                        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
                    }, {
                        name: 'Russian Federation',
                        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
                    }, {
                        name: 'Haiti',
                        data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
                    }],
                valueAxis: {
                    labels: {
                        format: '{0}%'
                    },
                    line: {
                        visible: false
                    },
                    axisCrossingValue: -10
                },
                categoryAxis: {
                    categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                    majorGridLines: {
                        visible: false
                    },
                    labels: {
                        rotation: 'auto'
                    }
                },
                tooltip: {
                    visible: true,
                    format: '{0}%',
                    template: '#= series.name #: #= value #'
                }
            };
        }
        CpuController.prototype.callApi = function (method, params, async, success, error) {
            var url = 'http://ryok-centos.cloudapp.net/zabbix/api_jsonrpc.php';
            var sendData = {
                jsonrpc: '2.0',
                id: 1,
                auth: authid,
                method: method,
                params: params,
            };
            $.ajax({
                url: url,
                contentType: 'application/json-rpc',
                dataType: 'json',
                type: 'POST',
                processData: false,
                data: JSON.stringify(sendData),
                async: async,
                success: success,
                error: error,
            });
        };
        CpuController.prototype.getAPIResponse = function (method, params, async, callback) {
            callAPI(method, params, async, function (response) {
                if (response['error']) {
                    alert("API Error:" + JSON.stringify(response));
                }
                else {
                    callback(response['result']);
                }
            }, function (response) {
                alert("Connect Error:" + JSON.stringify(response));
            });
        };
        return CpuController;
    })();
    spa5.CpuController = CpuController;
})(spa5 || (spa5 = {}));
