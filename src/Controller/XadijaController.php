<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class XadijaController extends AbstractController
{
    #[Route('/xadija', name: 'app_xadija')]
    public function index(): Response
    {
        return $this->render('xadija/index.html.twig', [
            'controller_name' => 'XadijaController',
        ]);
    }
    #[Route('/Cv', name: 'app_Cv')]
    public function Cv(): Response
    {
        return $this->render('xadija/Cv.html.twig', [
            'controller_name' => 'XadijaController',
        ]);
    }
    #[Route('/portfolio', name: 'app_portfolio')]
    public function portfolio(): Response
    {
        return $this->render('xadija/portfolio.html.twig', [
            'controller_name' => 'XadijaController',
        ]);
    }
    #[Route('/Formulaire', name: 'app_Formulaire')]
    public function Formulaire(): Response
    {
        return $this->render('xadija/Formulaire.html.twig', [
            'controller_name' => 'XadijaController',
        ]);
    }

}
 