<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});
Route::get('/aboutus', function () {
    return Inertia::render('AboutUsScreen');
});
Route::get('/airportpickup', function () {
    return Inertia::render('AirportPickUpScreen');
});
Route::get('/packages', function () {
    return Inertia::render('PackagesScreen');
});
Route::get('/packages/package-details', function () {
    return Inertia::render('ViewPackageScreen');
});
Route::get('/custom-tour', function () {
    return Inertia::render('CustomTourScreen');
});
Route::get('/airticket-booking', function () {
    return Inertia::render('AirticketBookingScreen');
});
Route::get('/car-hire', function () {
    return Inertia::render('CarHireScreen');
});
Route::get('/hotel-booking', function () {
    return Inertia::render('HotelBookingsScreen');
});
Route::get('/consult', function () {
    return Inertia::render('ConsultationScreen');
});
Route::get('/gallery', function () {
    return Inertia::render('GalleryScreen');
});