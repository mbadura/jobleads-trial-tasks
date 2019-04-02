<?php

header("Content-type=> application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (preg_match('/\/api/', $_SERVER["REQUEST_URI"])) {
    echo json_encode(
        [
            [
                'event' => "First Call",
                'date' => "2018-10-20",
                'time' => "08:00",
                'location' => "Anywhere",
                'participants' => ["John Doe", "Max Musterman"],
            ],
            [
                'event' => "Training Day",
                'date' => "2018-10-29",
                'time' => "08:00",
                'location' => "Hamburg",
                'participants' => ["John Doe", "Max Musterman"],
            ],
            [
                'event' => "First day at work",
                'date' => "2018-12-01",
                'time' => "08:00",
                'location' => "Hamburg",
                'participants' => ["John Doe", "Max Musterman", "Cris Sullivan", "Mark O'Polo"],
            ],
        ]
    );
} else {
    return false;
}
