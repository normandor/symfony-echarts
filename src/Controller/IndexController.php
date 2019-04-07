<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class IndexController extends AbstractController
{

    public function index()
    {
        $lines = [
            [
                'title' => 'Example line graph',
                'charts' => [
                    [
                        'divId' => 'chartLineId',
                        'title' => 'Title of the line graph',
                    ],
                ]
            ],
        ];
        $pies = [
            [
                'title' => 'Example pie graph',
                'charts' => [
                    [
                        'divId' => 'chartPieId',
                        'title' => 'Title of the pie graph',
                    ]
                ]
            ],
        ];
        return $this->render('index.html.twig', [
                    'charts' => $pies,
                    'lines' => $lines,
        ]);
    }

}
