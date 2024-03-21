import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';

const StatisticPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        if (response.data && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          throw new Error('API response format error: Users data not found or not an array.');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const getGenderStatistics = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return { male: 0, female: 0 };
    }

    const genderStats = { male: 0, female: 0 };

    users.forEach((user) => {
      if (user.gender === 'male') {
        genderStats.male++;
      } else if (user.gender === 'female') {
        genderStats.female++;
      }
    });

    return genderStats;
  };

  const getAgeStatistics = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return {};
    }

    const ageStats = {};

    users.forEach((user) => {
      const ageGroup = Math.floor(user.age / 10) * 10;
      if (ageStats[ageGroup]) {
        ageStats[ageGroup]++;
      } else {
        ageStats[ageGroup] = 1;
      }
    });

    return ageStats;
  };

  const getBloodGroupStatistics = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return {};
    }

    const bloodGroupStats = {};

    users.forEach((user) => {
      const group = user.bloodGroup;
      if (bloodGroupStats[group]) {
        bloodGroupStats[group]++;
      } else {
        bloodGroupStats[group] = 1;
      }
    });

    return bloodGroupStats;
  };

  const getAddressStatistics = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return {};
    }

    const addressStats = {};

    users.forEach((user) => {
      const address = user.address.city;
      if (addressStats[address]) {
        addressStats[address]++;
      } else {
        addressStats[address] = 1;
      }
    });

    return addressStats;
  };

  const getPopularBank = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return '';
    }
  
    const bankCounts = {};
  
    users.forEach((user) => {
      const bank = user.bankDetails?.name; // Add a check for bankDetails existence
      if (bank) {
        if (bankCounts[bank]) {
          bankCounts[bank]++;
        } else {
          bankCounts[bank] = 1;
        }
      }
    });
  
    let popularBank = '';
    let maxCount = 0;
  
    Object.entries(bankCounts).forEach(([bank, count]) => {
      if (count > maxCount) {
        maxCount = count;
        popularBank = bank;
      }
    });
  
    return popularBank;
  };

  const getPopularCryptoByGender = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return { male: {}, female: {} };
    }
  
    const cryptoCounts = { male: {}, female: {} };
  
    users.forEach((user) => {
      const gender = user.gender;
      const crypto = user.cryptoDetails?.coin; // Add a check for cryptoDetails existence
      if (crypto) {
        if (cryptoCounts[gender][crypto]) {
          cryptoCounts[gender][crypto]++;
        } else {
          cryptoCounts[gender][crypto] = 1;
        }
      }
    });
  
    return cryptoCounts;
  };
  
  const getNumberOfCryptoUsersByGenderAndAge = () => {
    if (!Array.isArray(users)) {
      console.error('Users data is not an array.');
      return {};
    }

    const cryptoUsersStats = { male: {}, female: {} };

    users.forEach((user) => {
      const gender = user.gender;
      const ageGroup = Math.floor(user.age / 10) * 10;

      if (cryptoUsersStats[gender][ageGroup]) {
        cryptoUsersStats[gender][ageGroup]++;
      } else {
        cryptoUsersStats[gender][ageGroup] = 1;
      }
    });

    return cryptoUsersStats;
  };

  const genderStatsData = getGenderStatistics();
  const ageStatsData = getAgeStatistics();
  const bloodGroupStatsData = getBloodGroupStatistics();
  const addressStatsData = getAddressStatistics();
  const popularBank = getPopularBank();
  const popularCryptoByGender = getPopularCryptoByGender();
  const cryptoUsersByGenderAndAge = getNumberOfCryptoUsersByGenderAndAge();

  const genderChartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [genderStatsData.male, genderStatsData.female],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const ageChartData = {
    labels: Object.keys(ageStatsData),
    datasets: [
      {
        label: 'Age Distribution',
        data: Object.values(ageStatsData),
        backgroundColor: '#FFCE56',
      },
    ],
  };

  const bloodGroupChartData = {
    labels: Object.keys(bloodGroupStatsData),
    datasets: [
      {
        label: 'Blood Group Distribution',
        data: Object.values(bloodGroupStatsData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const addressChartData = {
    labels: Object.keys(addressStatsData),
    datasets: [
      {
        label: 'Address Distribution',
        data: Object.values(addressStatsData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const popularCryptoMaleData = {
    labels: Object.keys(popularCryptoByGender.male),
    datasets: [
      {
        label: 'Popular Crypto (Male)',
        data: Object.values(popularCryptoByGender.male),
        backgroundColor: '#FF6384',
      },
    ],
  };

  const popularCryptoFemaleData = {
    labels: Object.keys(popularCryptoByGender.female),
    datasets: [
      {
        label: 'Popular Crypto (Female)',
        data: Object.values(popularCryptoByGender.female),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const cryptoUsersByGenderAndAgeData = {
    labels: Object.keys(cryptoUsersByGenderAndAge.male),
    datasets: [
      {
        label:        'Crypto Users (Male)',
        data: Object.values(cryptoUsersByGenderAndAge.male),
        backgroundColor: '#FF6384',
      },
      {
        label: 'Crypto Users (Female)',
        data: Object.values(cryptoUsersByGenderAndAge.female),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
<div>
<div class="title-container">
    <h1 class="title">Users Statistics</h1>
  </div>

  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    <div style={{ maxWidth: '600px', margin: '20px', flexBasis: '48%' }}>
      <div style={{ marginBottom: '20px' }}>
        <Pie data={genderChartData} />
      </div>
      <div>
        <Bar data={ageChartData} />
      </div>
    </div>

    <div style={{ maxWidth: '600px', margin: '20px', flexBasis: '48%' }}>
      <div style={{ marginBottom: '20px' }}>
        <Pie data={bloodGroupChartData} />
      </div>
      <div>
        <Bar data={addressChartData} />
      </div>
    </div>

    <div style={{ maxWidth: '600px', margin: '20px', flexBasis: '48%' }}>
      <div>
        <p>Popular Bank: {popularBank}</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Bar data={popularCryptoMaleData} />
      </div>
      <div>
        <Bar data={popularCryptoFemaleData} />
      </div>
    </div>

    <div style={{ maxWidth: '600px', margin: '20px', flexBasis: '48%' }}>
      <div>
        <Bar data={cryptoUsersByGenderAndAgeData} />
      </div>
    </div>
  </div>
</div>

  );
};

export default StatisticPage;

