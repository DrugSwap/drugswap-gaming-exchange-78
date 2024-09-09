import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Marketplace = () => {
  const tokens = [
    { name: 'Cannabis Token', price: 420, volume: 1000000 },
    { name: 'Cocaine Token', price: 800, volume: 500000 },
    { name: 'LSD Token', price: 25, volume: 2000000 },
    { name: 'MDMA Token', price: 100, volume: 750000 },
    { name: 'Mushroom Token', price: 50, volume: 1500000 },
  ];

  const chartData = [
    { name: 'Jan', Cannabis: 400, Cocaine: 240, LSD: 200 },
    { name: 'Feb', Cannabis: 300, Cocaine: 139, LSD: 220 },
    { name: 'Mar', Cannabis: 200, Cocaine: 980, LSD: 290 },
    { name: 'Apr', Cannabis: 278, Cocaine: 390, LSD: 0 },
    { name: 'May', Cannabis: 189, Cocaine: 480, LSD: 181 },
    { name: 'Jun', Cannabis: 239, Cocaine: 380, LSD: 250 },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">DrugSwap Marketplace</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Token Prices and Trading Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Price (DRUGS)</TableHead>
                  <TableHead>24h Volume</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tokens.map((token) => (
                  <TableRow key={token.name}>
                    <TableCell>{token.name}</TableCell>
                    <TableCell>{token.price}</TableCell>
                    <TableCell>{token.volume.toLocaleString()}</TableCell>
                    <TableCell>
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">Trade</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Market Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Cannabis" stroke="#8884d8" />
                <Line type="monotone" dataKey="Cocaine" stroke="#82ca9d" />
                <Line type="monotone" dataKey="LSD" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Top Dealers Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Dealer</TableHead>
                  <TableHead>Total Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>CryptoKing420</TableCell>
                  <TableCell>10,000,000 DRUGS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>TokenMaster69</TableCell>
                  <TableCell>8,500,000 DRUGS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>DrugLordETH</TableCell>
                  <TableCell>7,200,000 DRUGS</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <div className="mt-12 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> DrugSwap is a fictional platform for entertainment purposes only. 
          We do not condone the use, sale, or distribution of illegal drugs. This platform deals 
          exclusively with imaginary tokens and should not be associated with real drugs or illegal activities.
        </p>
      </div>
    </div>
  );
};

export default Marketplace;