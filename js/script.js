(function ($) {
  'use strict';

  // see: http://stackoverflow.com/a/11978996/782920
  function inlineSvg() {
    $('img.svg').each(function(){
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });
  }

  var data_wg2_1 = [
    {
      "Grafiknr": 3,
      "Gebietsname": "Graz(Stadt) Gesamt",
      "Gültige": "140,960",
      "Hofer": "50,119",
      "Hofer %": 35.56,
      "Van der Bellen": "90,841",
      "Van der Bellen %": 64.44
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Graz Wahllokal",
      "Gültige": "110,341",
      "Hofer": "41,939",
      "Hofer %": 38.01,
      "Van der Bellen": "68,402",
      "Van der Bellen %": 61.99
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Graz(Stadt)",
      "Gültige": "30,619",
      "Hofer": "8,180",
      "Hofer %": 26.72,
      "Van der Bellen": "22,439",
      "Van der Bellen %": 73.28
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Deutschlandsberg Gesamt",
      "Gültige": "41,851",
      "Hofer": "26,593",
      "Hofer %": 63.54,
      "Van der Bellen": "15,258",
      "Van der Bellen %": 36.46
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Deutschlandsberg",
      "Gültige": "35,136",
      "Hofer": "22,803",
      "Hofer %": 64.9,
      "Van der Bellen": "12,333",
      "Van der Bellen %": 35.1
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Deutschlandsberg",
      "Gültige": "6,715",
      "Hofer": "3,790",
      "Hofer %": 56.44,
      "Van der Bellen": "2,925",
      "Van der Bellen %": 43.56
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Graz-Umgebung Gesamt",
      "Gültige": "100,227",
      "Hofer": "55,286",
      "Hofer %": 55.16,
      "Van der Bellen": "44,941",
      "Van der Bellen %": 44.84
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Graz-Umgebung",
      "Gültige": "84,728",
      "Hofer": "47,690",
      "Hofer %": 56.29,
      "Van der Bellen": "37,038",
      "Van der Bellen %": 43.71
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Graz-Umgebung",
      "Gültige": "15,499",
      "Hofer": "7,596",
      "Hofer %": 49.01,
      "Van der Bellen": "7,903",
      "Van der Bellen %": 50.99
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Leibnitz Gesamt",
      "Gültige": "50,954",
      "Hofer": "33,692",
      "Hofer %": 66.12,
      "Van der Bellen": "17,262",
      "Van der Bellen %": 33.88
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Leibnitz",
      "Gültige": "44,338",
      "Hofer": "29,907",
      "Hofer %": 67.45,
      "Van der Bellen": "14,431",
      "Van der Bellen %": 32.55
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Leibnitz",
      "Gültige": "6,616",
      "Hofer": "3,785",
      "Hofer %": 57.21,
      "Van der Bellen": "2,831",
      "Van der Bellen %": 42.79
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Leoben",
      "Gültige": "39,873",
      "Hofer": "22,786",
      "Hofer %": 57.15,
      "Van der Bellen": "17,087",
      "Van der Bellen %": 42.85
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Leoben",
      "Gültige": "33,980",
      "Hofer": "19,925",
      "Hofer %": 58.64,
      "Van der Bellen": "14,055",
      "Van der Bellen %": 41.36
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Leoben",
      "Gültige": "5,893",
      "Hofer": "2,861",
      "Hofer %": 48.55,
      "Van der Bellen": "3,032",
      "Van der Bellen %": 51.45
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Liezen",
      "Gültige": "51,027",
      "Hofer": "28,561",
      "Hofer %": 55.97,
      "Van der Bellen": "22,466",
      "Van der Bellen %": 44.03
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Liezen",
      "Gültige": "42,488",
      "Hofer": "24,624",
      "Hofer %": 57.96,
      "Van der Bellen": "17,864",
      "Van der Bellen %": 42.04
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Liezen",
      "Gültige": "8,539",
      "Hofer": "3,937",
      "Hofer %": 46.11,
      "Van der Bellen": "4,602",
      "Van der Bellen %": 53.89
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Murau",
      "Gültige": "19,422",
      "Hofer": "12,058",
      "Hofer %": 62.08,
      "Van der Bellen": "7,364",
      "Van der Bellen %": 37.92
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Murau",
      "Gültige": "16,209",
      "Hofer": "10,307",
      "Hofer %": 63.59,
      "Van der Bellen": "5,902",
      "Van der Bellen %": 36.41
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Murau",
      "Gültige": "3,213",
      "Hofer": "1,751",
      "Hofer %": 54.5,
      "Van der Bellen": "1,462",
      "Van der Bellen %": 45.5
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Voitsberg",
      "Gültige": "34,697",
      "Hofer": "22,224",
      "Hofer %": 64.05,
      "Van der Bellen": "12,473",
      "Van der Bellen %": 35.95
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Voitsberg",
      "Gültige": "30,164",
      "Hofer": "19,758",
      "Hofer %": 65.5,
      "Van der Bellen": "10,406",
      "Van der Bellen %": 34.5
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Voitsberg",
      "Gültige": "4,533",
      "Hofer": "2,466",
      "Hofer %": 54.4,
      "Van der Bellen": "2,067",
      "Van der Bellen %": 45.6
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Weiz",
      "Gültige": "58,949",
      "Hofer": "34,520",
      "Hofer %": 58.56,
      "Van der Bellen": "24,429",
      "Van der Bellen %": 41.44
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Weiz",
      "Gültige": "51,316",
      "Hofer": "30,840",
      "Hofer %": 60.1,
      "Van der Bellen": "20,476",
      "Van der Bellen %": 39.9
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Weiz",
      "Gültige": "7,633",
      "Hofer": "3,680",
      "Hofer %": 48.21,
      "Van der Bellen": "3,953",
      "Van der Bellen %": 51.79
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Murtal",
      "Gültige": "46,900",
      "Hofer": "27,510",
      "Hofer %": 58.66,
      "Van der Bellen": "19,390",
      "Van der Bellen %": 41.34
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Murtal",
      "Gültige": "39,734",
      "Hofer": "23,964",
      "Hofer %": 60.31,
      "Van der Bellen": "15,770",
      "Van der Bellen %": 39.69
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Murtal",
      "Gültige": "7,166",
      "Hofer": "3,546",
      "Hofer %": 49.48,
      "Van der Bellen": "3,620",
      "Van der Bellen %": 50.52
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Bruck-Mürzzuschlag",
      "Gültige": "67,813",
      "Hofer": "37,085",
      "Hofer %": 54.69,
      "Van der Bellen": "30,728",
      "Van der Bellen %": 45.31
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Bruck-Mürzzuschlag",
      "Gültige": "56,522",
      "Hofer": "31,822",
      "Hofer %": 56.3,
      "Van der Bellen": "24,700",
      "Van der Bellen %": 43.7
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Bruck-Mürzzuschlag",
      "Gültige": "11,291",
      "Hofer": "5,263",
      "Hofer %": 46.61,
      "Van der Bellen": "6,028",
      "Van der Bellen %": 53.39
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Hartberg-Fürstenfeld",
      "Gültige": "61,671",
      "Hofer": "41,148",
      "Hofer %": 66.72,
      "Van der Bellen": "20,523",
      "Van der Bellen %": 33.28
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Hartberg-Fürstenfeld",
      "Gültige": "54,609",
      "Hofer": "37,231",
      "Hofer %": 68.18,
      "Van der Bellen": "17,378",
      "Van der Bellen %": 31.82
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Hartberg-Fürstenfeld",
      "Gültige": "7,062",
      "Hofer": "3,917",
      "Hofer %": 55.47,
      "Van der Bellen": "3,145",
      "Van der Bellen %": 44.53
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Südoststeiermark",
      "Gültige": "56,565",
      "Hofer": "37,166",
      "Hofer %": 65.7,
      "Van der Bellen": "19,399",
      "Van der Bellen %": 34.3
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Südoststeiermark",
      "Gültige": "49,171",
      "Hofer": "32,965",
      "Hofer %": 67.04,
      "Van der Bellen": "16,206",
      "Van der Bellen %": 32.96
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Südoststeiermark",
      "Gültige": "7,394",
      "Hofer": "4,201",
      "Hofer %": 56.82,
      "Van der Bellen": "3,193",
      "Van der Bellen %": 43.18
    }
  ];

  var data_wg2_2 = [
    {
      "Grafiknr": 3,
      "Gebietsname": "Graz(Stadt) Gesamt",
      "Gültige": 145.122,
      "Hofer": 47.825,
      "Hofer %": 32.96,
      "Van der Bellen": 97.297,
      "Van der Bellen %": 67.04
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Graz Wahllokal",
      "Gültige": 119.704,
      "Hofer": 42.35,
      "Hofer %": 35.38,
      "Van der Bellen": 77.354,
      "Van der Bellen %": 64.62
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Graz(Stadt)",
      "Gültige": 25.418,
      "Hofer": 5.475,
      "Hofer %": 21.54,
      "Van der Bellen": 19.943,
      "Van der Bellen %": 78.46
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Deutschlandsberg Gesamt",
      "Gültige": 35.793,
      "Hofer": 22.043,
      "Hofer %": 61.58,
      "Van der Bellen": 13.75,
      "Van der Bellen %": 38.42
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Deutschlandsberg",
      "Gültige": 30.091,
      "Hofer": 19.195,
      "Hofer %": 63.79,
      "Van der Bellen": 10.896,
      "Van der Bellen %": 36.21
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Deutschlandsberg",
      "Gültige": 5.702,
      "Hofer": 2.848,
      "Hofer %": 49.95,
      "Van der Bellen": 2.854,
      "Van der Bellen %": 50.05
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Graz-Umgebung Gesamt",
      "Gültige": 86.901,
      "Hofer": 45.989,
      "Hofer %": 52.92,
      "Van der Bellen": 40.912,
      "Van der Bellen %": 47.08
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Graz-Umgebung",
      "Gültige": 74.304,
      "Hofer": 40.638,
      "Hofer %": 54.69,
      "Van der Bellen": 33.666,
      "Van der Bellen %": 45.31
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Graz-Umgebung",
      "Gültige": 12.597,
      "Hofer": 5.351,
      "Hofer %": 42.48,
      "Van der Bellen": 7.246,
      "Van der Bellen %": 57.52
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Leibnitz Gesamt",
      "Gültige": 45.929,
      "Hofer": 29.662,
      "Hofer %": 64.58,
      "Van der Bellen": 16.267,
      "Van der Bellen %": 35.42
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Leibnitz",
      "Gültige": 39.986,
      "Hofer": 26.547,
      "Hofer %": 66.39,
      "Van der Bellen": 13.439,
      "Van der Bellen %": 33.61
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Leibnitz",
      "Gültige": 5.943,
      "Hofer": 3.115,
      "Hofer %": 52.41,
      "Van der Bellen": 2.828,
      "Van der Bellen %": 47.59
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Leoben",
      "Gültige": 34.112,
      "Hofer": 18.798,
      "Hofer %": 55.11,
      "Van der Bellen": 15.314,
      "Van der Bellen %": 44.89
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Leoben",
      "Gültige": 29.404,
      "Hofer": 16.963,
      "Hofer %": 57.69,
      "Van der Bellen": 12.441,
      "Van der Bellen %": 42.31
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Leoben",
      "Gültige": 4.708,
      "Hofer": 1.835,
      "Hofer %": 38.98,
      "Van der Bellen": 2.873,
      "Van der Bellen %": 61.02
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Liezen",
      "Gültige": 42.266,
      "Hofer": 22.457,
      "Hofer %": 53.13,
      "Van der Bellen": 19.809,
      "Van der Bellen %": 46.87
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Liezen",
      "Gültige": 35.269,
      "Hofer": 19.682,
      "Hofer %": 55.81,
      "Van der Bellen": 15.587,
      "Van der Bellen %": 44.19
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Liezen",
      "Gültige": 6.997,
      "Hofer": 2.775,
      "Hofer %": 39.66,
      "Van der Bellen": 4.222,
      "Van der Bellen %": 60.34
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Murau",
      "Gültige": 15.979,
      "Hofer": 9.551,
      "Hofer %": 59.77,
      "Van der Bellen": 6.428,
      "Van der Bellen %": 40.23
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Murau",
      "Gültige": 13.414,
      "Hofer": 8.331,
      "Hofer %": 62.11,
      "Van der Bellen": 5.083,
      "Van der Bellen %": 37.89
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Murau",
      "Gültige": 2.565,
      "Hofer": 1.22,
      "Hofer %": 47.56,
      "Van der Bellen": 1.345,
      "Van der Bellen %": 52.44
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Voitsberg",
      "Gültige": 30.637,
      "Hofer": 19.08,
      "Hofer %": 62.28,
      "Van der Bellen": 11.557,
      "Van der Bellen %": 37.72
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Voitsberg",
      "Gültige": 26.993,
      "Hofer": 17.317,
      "Hofer %": 64.15,
      "Van der Bellen": 9.676,
      "Van der Bellen %": 35.85
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Voitsberg",
      "Gültige": 3.644,
      "Hofer": 1.763,
      "Hofer %": 48.38,
      "Van der Bellen": 1.881,
      "Van der Bellen %": 51.62
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Weiz",
      "Gültige": 51.81,
      "Hofer": 29.253,
      "Hofer %": 56.46,
      "Van der Bellen": 22.557,
      "Van der Bellen %": 43.54
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Weiz",
      "Gültige": 46.015,
      "Hofer": 26.786,
      "Hofer %": 58.21,
      "Van der Bellen": 19.229,
      "Van der Bellen %": 41.79
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Weiz",
      "Gültige": 5.795,
      "Hofer": 2.467,
      "Hofer %": 42.57,
      "Van der Bellen": 3.328,
      "Van der Bellen %": 57.43
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Murtal",
      "Gültige": 40.427,
      "Hofer": 22.736,
      "Hofer %": 56.24,
      "Van der Bellen": 17.691,
      "Van der Bellen %": 43.76
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Murtal",
      "Gültige": 34.458,
      "Hofer": 20.219,
      "Hofer %": 58.68,
      "Van der Bellen": 14.239,
      "Van der Bellen %": 41.32
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Murtal",
      "Gültige": 5.969,
      "Hofer": 2.517,
      "Hofer %": 42.17,
      "Van der Bellen": 3.452,
      "Van der Bellen %": 57.83
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Bruck-Mürzzuschlag",
      "Gültige": 55.804,
      "Hofer": 29.07,
      "Hofer %": 52.09,
      "Van der Bellen": 26.734,
      "Van der Bellen %": 47.91
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Bruck-Mürzzuschlag",
      "Gültige": 46.963,
      "Hofer": 25.517,
      "Hofer %": 54.33,
      "Van der Bellen": 21.446,
      "Van der Bellen %": 45.67
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Bruck-Mürzzuschlag",
      "Gültige": 8.841,
      "Hofer": 3.553,
      "Hofer %": 40.19,
      "Van der Bellen": 5.288,
      "Van der Bellen %": 59.81
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Hartberg-Fürstenfeld",
      "Gültige": 55.362,
      "Hofer": 35.957,
      "Hofer %": 64.95,
      "Van der Bellen": 19.405,
      "Van der Bellen %": 35.05
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Hartberg-Fürstenfeld",
      "Gültige": 49.701,
      "Hofer": 33.157,
      "Hofer %": 66.71,
      "Van der Bellen": 16.54,
      "Van der Bellen %": 33.28
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Hartberg-Fürstenfeld",
      "Gültige": 5.661,
      "Hofer": 2.8,
      "Hofer %": 49.46,
      "Van der Bellen": 2.865,
      "Van der Bellen %": 50.61
    },
    {
      "Grafiknr": 3,
      "Gebietsname": "Südoststeiermark",
      "Gültige": 49.596,
      "Hofer": 31.357,
      "Hofer %": 63.22,
      "Van der Bellen": 18.239,
      "Van der Bellen %": 36.78
    },
    {
      "Grafiknr": 1,
      "Gebietsname": "Wahllokal Südoststeiermark",
      "Gültige": 43.548,
      "Hofer": 28.286,
      "Hofer %": 64.95,
      "Van der Bellen": 15.262,
      "Van der Bellen %": 35.05
    },
    {
      "Grafiknr": 2,
      "Gebietsname": "Wahlkarten - Südoststeiermark",
      "Gültige": 6.048,
      "Hofer": 3.071,
      "Hofer %": 50.78,
      "Van der Bellen": 2.977,
      "Van der Bellen %": 49.22
    }
  ];

  function colorMaps(file, startId) {
    $(file).each(function (index, value){
      var id = startId;
      switch (value['Grafiknr']) {
        case 3:
          id += 'gesamt_';
          break;
        case 1:
          id += 'lokal_';
          break;
        case 2:
          id += 'briefwahl_';
          break;
      }

      var name = value['Gebietsname'];
      name = name.toLowerCase();
      name = name.replace('gesamt', '');
      name = name.replace('wahlkarten', '');
      name = name.replace('wahllokal', '');
      name = name.replace('(stadt)', '');
      name = name.replace(' - ', ' ');
      name = name.trim();

      var $mapHofer = $(id + 'hofer_map');
      var $mapVdb = $(id + 'vdb_map');

      var hoferValue = value['Hofer %'];
      var vdbValue = value['Van der Bellen %'];

      hoferValue -= 20;
      vdbValue -= 20;

      hoferValue *= 2; // range from 20 to 70 is 50 of 100 long.
      vdbValue *= 2;

      hoferValue /= 20;
      vdbValue /= 20;

      hoferValue = Math.floor(hoferValue);
      vdbValue = Math.floor(vdbValue);

      hoferValue *= 20;
      vdbValue *= 20;

      hoferValue /= 100;
      vdbValue /= 100;

      hoferValue = hoferValue > 1 ? 1 : hoferValue;
      vdbValue = vdbValue > 1 ? 1 : vdbValue;

      hoferValue = hoferValue < 0 ? 0 : hoferValue;
      vdbValue = vdbValue < 0 ? 0 : vdbValue;

      console.log(hoferValue);
      console.log(vdbValue);

      $('.' + name, $mapHofer)
        .attr('fill', 'blue')
        .attr('fill-opacity', hoferValue)
        .html($('<title>').text(value['Gebietsname'] + ' Hofer: ' + value['Hofer %'] + '%'));
      $('.' + name, $mapVdb)
        .attr('fill', 'green')
        .attr('fill-opacity', vdbValue)
        .html($('<title>').text(value['Gebietsname'] + ' VDB: ' + value['Van der Bellen %'] + '%'));


      $('.legend-01', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 0.0);
      $('.legend-02', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 0.2);
      $('.legend-03', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 0.4);
      $('.legend-04', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 0.6);
      $('.legend-05', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 0.8);
      $('.legend-06', $mapHofer).attr('fill', 'blue').attr('fill-opacity', 1.0);

      $('.legend-01', $mapVdb).attr('fill', 'green').attr('fill-opacity', 0.0);
      $('.legend-02', $mapVdb).attr('fill', 'green').attr('fill-opacity', 0.2);
      $('.legend-03', $mapVdb).attr('fill', 'green').attr('fill-opacity', 0.4);
      $('.legend-04', $mapVdb).attr('fill', 'green').attr('fill-opacity', 0.6);
      $('.legend-05', $mapVdb).attr('fill', 'green').attr('fill-opacity', 0.8);
      $('.legend-06', $mapVdb).attr('fill', 'green').attr('fill-opacity', 1.0);
    });
  }

  $(function () {

    inlineSvg();

    // todo: don't use timeout
    setTimeout(function () {

      colorMaps(data_wg2_1, '#wg2_1_');
      colorMaps(data_wg2_2, '#wg2_2_');

      var $hoferMapBriefwahl = $('#wg2_1_briefwahl_hofer_map');
      var $vdbMapBriefwahl = $('#wg2_1_briefwahl_vdb_map');

      $('.legend-01', $hoferMapBriefwahl).show();
      $('.legend-01-text', $hoferMapBriefwahl).show();
      $('.legend-06', $vdbMapBriefwahl).show();
      $('.legend-06-text', $vdbMapBriefwahl).show();

      var $hoferMapBriefwahl2 = $('#wg2_2_briefwahl_hofer_map');
      var $vdbMapBriefwahl2 = $('#wg2_2_briefwahl_vdb_map');

      $('.legend-01', $hoferMapBriefwahl2).show();
      $('.legend-01-text', $hoferMapBriefwahl2).show();
      $('.legend-05', $hoferMapBriefwahl2).hide();
      $('.legend-05-text', $hoferMapBriefwahl2).hide();
      $('.legend-02', $vdbMapBriefwahl2).hide();
      $('.legend-02-text', $vdbMapBriefwahl2).hide();
      $('.legend-06', $vdbMapBriefwahl2).show();
      $('.legend-06-text', $vdbMapBriefwahl2).show();

      var $maps = $('.map');

      $maps.each(function () {
        var $map = $(this);
        var b64 = Base64.encode($map.clone().wrap('<p>').parent().html());
        $map.after($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n" + b64 + "' title='" + $map.attr('id') + ".svg'>Download</a>"));
      });
    }, 300);


  });
})(jQuery);
