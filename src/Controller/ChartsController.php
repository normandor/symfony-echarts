<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ChartsController extends AbstractController
{

    public function getDataForLine()
    {
        // here you shuold better call a service to retrieve the info from a table, etc...
        // (this is just a hardcoded example :D)
        // $json = $chartsService->getLineDataByZone(...);

        $json = [
            'dateTot' => ["2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03", "2019-04"],
            'dataLegendTot' => "Global",
            'yAxisTitleTot' => "Quantity",
            'seriesNameTot' => ["Series 1", "Series 2", "Series 3"],
            'seriesLineColorTot' => ["#C0392B", "#8E44AD", "#2E86C1", "#17A589", "#D4AC0D", "#CA6F1E", "#839192"],
            'seriesAreaColorTot' => ["#E6B0AA", "#D2B4DE", "#AED6F1", "#A3E4D7", "#F9E79F", "#FAD7A0", "#E5E7E9"],
            'seriesDataTot' => [
                $this->getRandomArray(12),
                $this->getRandomArray(12),
                $this->getRandomArray(12),
            ],
        ];
        return new Response(json_encode($json));
    }

    public function getDataForPie()
    {
        // here you shuold better call a service to retrieve the info from a table, etc...
        // (this is just a hardcoded example :D)
        // $json = $chartsService->getPieDataByZone(...);

        $json = [
            [
                'name' => "Series 1",
                'value' => rand(0,20),
            ],
            [
                'name' => "Series 2",
                'value' => rand(0,20),
            ],
            [
                'name' => "Series 3",
                'value' => rand(0,20),
            ],
        ];
        return new Response(json_encode($json));
    }

    /**
     * 
     * @param int $size
     * 
     * @return array
     */
    private function getRandomArray($size)
    {
        $random_number_array = range(0, 100);
        shuffle($random_number_array);
        return array_slice($random_number_array, 0, $size);
    }

}
