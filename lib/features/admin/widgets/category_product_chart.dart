import 'package:amazon_clone/features/admin/models/sales.dart';
import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';

class CategoryProductsChart extends StatelessWidget {
  final List<Sales> salesDataList;
  
  const CategoryProductsChart({
    Key? key,
    required this.salesDataList,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BarChart(
      BarChartData(
        barGroups: _convertDataToBarGroups(salesDataList),
      ),
    );
  }

  List<BarChartGroupData> _convertDataToBarGroups(List<Sales> salesDataList) {
    return salesDataList.map((sales) {
      return BarChartGroupData(
        x: sales.earning,
       
      );
    }).toList();
  }
}
