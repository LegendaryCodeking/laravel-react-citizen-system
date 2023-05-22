<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-5">

    <section class="max-w-2xl px-6 py-8 mx-auto bg-gray-100">
        <header class="flex items-center justify-center">
            <a href="#">
                <img class="w-auto h-[200px] sm:h-[100px]" src="./logo-3.png" alt="">
            </a>
        </header>
    
        <main class="mt-8">
            <p class="text-xl text-gray-700 text-gray-500">Thank You for Registering!</p>

            <p class="mt-4 leading-loose text-gray-500">Dear {{ $name }},</p>

            <p class="mt-4 leading-loose text-gray-500">
                We would like to express our sincere gratitude for registering on our platform. Welcome to our community! We are thrilled to have you on board.
            </p>

            <p class="mt-4 leading-loose text-gray-500">
               As a registered user, you now have access to your QR CODE and PROFILE portal. We have created a user account for you, providing you with a personalized experience. Here are your account details:
            </p>

            <p class="mt-4 leading-loose text-gray-500">
               Email: {{ $email }} <br>
               Password: {{ $password }}
            </p>
    
            <hr class="my-6 border-gray-200 dark:border-gray-700">
    
            <div>
                <div>
                    <p class="mt-4 leading-loose text-gray-500">
                        To enhance your experience further, we are pleased to offer you a downloadable QR code. This QR code is unique to your account and can be used for various purposes within our platform. To download your QR code, simply click on the link provided below:
                    </p>
                    <br>
                    <a href="{{ $link }}" class="inline-flex items-center text-blue-600 underline dark:text-blue-400 gap-x-2 underline-offset-4">
                        <span>[QR Code Download Link]</span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
    
                </div>
    
                <hr class="my-6 border-gray-200 dark:border-gray-700">
    
            
            <a href="http://localhost:5173/registration" class="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                SIGNIN USING YOUR USER EMAIL AND PASSWORD
            </a>
        </main>
        
    
        <footer class="mt-8">
            <p class="mt-3 text-gray-500 dark:text-gray-400">© 8 RJA EXPRESS INCORPORATION.</p>
        </footer>
    </section>

</body>
</html>