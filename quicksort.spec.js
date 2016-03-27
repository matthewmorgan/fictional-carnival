import quicksort from './quicksort';

describe('Quicksort', ()=>{

  it('sorts an array', ()=> {
    var arr = [ 7, 4, 1, 5, 10, 3 ];
    var result = quicksort(arr);
    expect(result).toEqual([1,3,4,5,7,10]);
  });


  it('sorts a larger array', ()=> {
    var arr = [4933, 3038, -3626, -4816, -2063, -4013, 4451, 1022, -3618, -1969, -1408, 407, 839, 1173, 1903, -4334, -2133, -918, -1857, -1155, -4468, 1142, -4628, 1880, 172, 1551, -1403, -3883, -122, -4955, 3821, 4986, -4974, 2258, -3358, -2504, 2811, 2108, 1811, 4487, -3219, 450, 4541, 3083, -1187, 1801, 1473, -2463, -1026, 3105, 2192, 4177, 1855, -4356, -1119, 3766, -4501, 1499, 1127, 1963, -4787, 2513, -4106, -3686, -271, -4202, 977, 2695, -4895, -899, 896, -2280, -7, -1186, 3327, 355, -2040, 3308, 3661, 377, -4824, -1498, -2368, -1587, 2030, 3970, 605, 3921, 1311, 3980, 4385, -3668, 1319, -503, -3633, 1163, 2823, 1608, -2430, 854, 1854, -4036, 3215, -2860, -1057, 4488, 3093, -1938, -1220, -4306, 3237, 4914, 3882, 3502, 2923, 292, -1370, -613, 3747, 4109, -3320, -2356, 53, -1396, -1156, -3531, 843, 570, 1035, -3757, -1740, 2017, 2201, -614, 43, 1014, 2818, 3401, -596, -3386, 2375, 1827, -2968, 4686, 1260, 4773, -2268, -2160, -3352, -1369, -477, -538, -3343, -3268, 1115, -3875, 2960, 96, -2441, 372, 4399, -1589, 3588, -4309, -3755, -1845, -604, -1299, -1853, -2555, -3767, 1268, -3454, 3125, -2247, 3804, -3806, 39, 756, -1414, 3271, 1806, 196, -1577, 4002, 2950, 4547, -2339, -2569, -4505, -257, -3835, -4606, -3385, 3746, 1197, 4886, -4658, -4915, -548, 284, 4403, -202, -3546, 1214, -3066, 4917, 3853, -1958, 2660, 609, 61, -860, 1992, 443, 2764, 979, -4339, 4202, -3120, 2668, -12, 2993, -327, 4364, -4791, 3579, -1161, 4880, -1506, 1425, 2133, 2881, 3594, -1894, -2515, 3529, 4127, -961, -1596, -1580, -15, 3186, -3222, 3831, -2193, 4454, -1300, 926, 2284, -4523, -1967, 610, -1806, 976, 1021, -607, 4479, -4669, -3171, 1842, 3028, 2521, 2278, 1593, -4846, -1292, 2247, 2244, 4961, -4921, 4943, -4324, 2597, -4261, -2907, 4511, 2471, -2429, 786, -3368, -4434, -2239, 4680, 627, 3210, 449, 711, -1949, -562, 3845, -3629, -3700, -2426, 1766, -4843, 3453, -4452, -2071, 1471, 3407, 2846, 4674, 389, 298, -1968, 569, 996, 1609, -4625, 3775, 4762, -826, -590, -4209, -1504, 3887, 3690, -3365, 1272, -2969, -2061, 2553, -1430, -3851, 929, 807, 3005, -4361, -2058, 3122, 373, -341, 2912, -4863, 2099, 3437, 3139, -2051, 2154, -1731, 1917, -3064, 3928, 418, 3733, 4852, 1906, -2469, -3913, -1892, -1705, -3920, -4049, -3260, -4671, 3736, -4138, 1622, -4068, 4393, -395, -285, -3945, 5000, -3298, 3626, -2658, 1659, 1277, 2867, 536, 1217, 3211, -4159, 830, 4973, 4614, 4759, -1874, -594, 4193, -2910, -3369, 4963, -2977, 3297, 1436, 2917, -4028, -383, -3449, 2928, -3195, -482, 2731, -380, 4976, -1888, 1657, -2832, -4762, 85, -4660, -4238, 2524, 949, -3861, 530, 3275, -1018, 3825, -1283, 495, 4747, 2754, 2557, -1091, 1671, 4183, -1313, -2024, -4757, -4694, 2455, 2903, 3938, -1703, 2113, 2041, -798, -188, 4641, -2627, 1231, -1656, 4579, -2069, 1010, -4016, -265, 1782, -3431, 3968, 1837, 765, -4886, -1217, -494, 3847, -2976, -1420, -4347, 1478, 2584, -1278, -48, 2166, -120, -3166, -2284, -576, 3830, -549, 1532, -4471, 725, -522, 476, -2027, -2721, 1805, -2880, -465, 3425, -2533, -978, 4301, 1730, 93, -2833, 1497, 1898, -1757, -4183, 4476, 4746, -164, 4490, -1839, -2234, 32, -3606, 98, 1114, 1494, 1607, -2220, -3019, 4144, 4562, 4823, -153, 2345, 864, -3442, 3863, -1795, -2125, 4356, -4118, 3370, -3207, -2431, 4340, 3469, -733, -1660, -2433, 3617, -326, 2452, -3412, -481, 3982, -1954, 4363, -1993, -3132, 3435, 1974, -4323, 3329, 521, -4464, 4375, -4435, -670, 1538, 4743, -928, 2564, 4868, -3780, -2306, 3524, 1222, 2916, -4268, -1978, 3728, -2849, 455, -3332, -840, -2198, -4455, -3231, -4932, -686, 600, -2158, -199, 1556, -4429, -1687, 153, -291, 2534, 1336, 2583, -4165, 2369, -2795, -3769, 4595, -4460, 3977, 2409, -4124, -4513, 4992, 1165, -2219, 4376, 4793, -3893, -649, 701, -491, -4567, -89, -2257, -3342, 4936, 4822, -2594, 4181, 1565, 1896, 3094, -3404, 3228, 1535, 4423, 4396, -92, -1732, 2698, -3837, -354, -386, 1482, -4080, 1076, -4506, 1452, 3396, 970, 674, 4104, -1441, 2481, -3591, -1869, -3096, 3281, -4731, -905, 1978, 3429, 1019, 90, -3869, -1560, 1553, 4995, 3512, -4825, -2497, -1992, -3802, -3596, -2398, -4492, 938, 271, -1074, 3953, 3950, -223, 3673, 4063, 4690, -4184, -2326, 3604, -1890, 3563, -1906, 145, 2259, 3621, 3765, -4108, -3234, 2780, 467, 1099, 1564, 2449, 2639, 1621, 2235, -2972, 1886, 4139, -927, -685, 3519, 15, 1628, 3582, 824, -4517, 1281, 3420, 1105, -3420, 4005, 3862, -3441, 4128, 4154, -237, -611, -674, -653, 3555, -3447, 1664, -2857, -2786, -2535, 3712, 3634, 2612, -1997, 909, 3342, 1692, 533, 2510, -239, 755, -3249, -1023, -1092, -2349, -3810, -4260, -3104, -1739, -1803, -4703, 205, -3154, -1631, 136, 2225, 4545, 3207, 1490, -4167, -198, -284, 2937, -3718, 2672, -513, -4827, 2433, -2831, -1970, -2933, 1765, 4137, 3103, -4208, 3474, 1955, 3387, -4684, 369, 3534, 669, -34, 1592, -1945, 387, 2998, -4944, 887, -2287, -4719, -4950, 3791, 2686, -2254, 1653, 1223, -4001, 3779, -1213, 846, -4778, 99, 1875, 1249, 3470, -962, 3107, 2268, -2354, 3057, 4871, -1674, 727, -2117, -2560, -3688, 4390, -4532, -3506, 1439, 329, 2459, -107, 737, -3255, -4920, -3660, 3082, 4523, 509, -1324, -2116, -3476, 2031, 1506, 4298, -2755, 1735, -859, -4583, -2060, -4572, -684, -2798, 1133, 4262, 3715, -32, 2195, 2842, -1930, 3719, 1266, 1921, 1979, -2350, 2250, 4054, -436, -3453, -1750, 988, -625, -4767, 4937, 2498, -1709, -784, 1096, -4582, 3059, 1176, -1191, -4594, -192, -1163, -4345, -4380, 2309, -4768, -2295, -772, 1120, 2358, 4892, -987, -3107, -4214, -589, 878, 471, 1031, -4018, -1342, -2006, 1365, 1140, 3268, 3129, 3153, 4436, -4806, -3776, 2384, 4231, 829, -4507, 4321, 1371, -4217, 3035, -3459, -2666, 3948, 1038, 163, -2918, -398, -66, 2718, 4972, -2077, 4268, 510, 3725, 4568, 3856, 1143, 3390, 2828, -252, -1062, 4372, 921, 794, -739, 237, 2663, -633, -2944, -571, 2320, 1793, -357, 3593, 4191, -4412, 4619, -4642, -2335, 1752, -3997, -2083, 3076, -4171, -2370, 3460, 978, -2956, -2222, 1174, 1292, 170, -2840, -246, -2975, 4229, 1191, -2584, 183, 4720, 4141, -2292, 880, 2779, -2019, -330, 1209, 1829, 2398, 4232, 825, 3419, -698, -355, -2942, -3062, 4998, 2293, 1225, 2351, -105, -1172, -732, 2738, 2228, 3138, -4135, -3425, 485, -3562, 4714, -1926, -489, 782, -4997, -3179, 1024, 947, -864, -2641, -195, -1779, 2637, 2105, -1097, 1660, 2582, -832, 1269, -1165, 1772, -1139, -2070, 2286];
    
    var result = quicksort(arr);

    var sortedArr = arr.sort();
    expect(result).toEqual(sortedArr);
  });

});
