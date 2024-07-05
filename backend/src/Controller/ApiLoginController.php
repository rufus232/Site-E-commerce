<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\User;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\HttpFoundation\Response;

class ApiLoginController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function index(#[CurrentUser] ?User $user): Response
    {
        if (null === $user) {
            return $this->json([
                             'message' => 'missing credentials',
                         ], Response::HTTP_UNAUTHORIZED);
                     }

                     return $this->json([
                        'mail'  => $user->getUserIdentifier(),
                        'address'=>$user->getAdresse(),
                        'username'=>$user->getUsername()
                        ]);
    }
}
