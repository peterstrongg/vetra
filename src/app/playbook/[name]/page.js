'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const tabs = ['General Info', 'Live Output'];

export default function PlaybookPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('General Info');
  const [playbook] = useState({
    name: 'Deploy Cluster',
    path: '/ansible/playbooks/deploy.yml',
    tags: ['init', 'cluster'],
    description: 'Automates cluster deployment including package setup, user config, and network bootstrapping.'
  });
  const [output, setOutput] = useState([]);
  const [executionDate, setExecutionDate] = useState(null);

  useEffect(() => {
    if (activeTab === 'Live Output' && output.length === 0) {
      const logs = [
        '[INFO] Starting playbook...',
        '[TASK] Validate environment',
        '[OK] Environment OK',
        '[TASK] Install Ansible dependencies',
        '[ERROR] Unable to locate package net-tools',
        '[INFO] Retrying with mirror...'
      ];
      let i = 0;
      const stream = setInterval(() => {
        if (i < logs.length) {
          setOutput((prev) => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(stream);
        }
      }, 1000);
      setExecutionDate(new Date().toLocaleString());
      return () => clearInterval(stream);
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-neutral-100 text-gray-900 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">📘 {playbook.name}</h1>
        <p className="text-gray-500">View metadata, run executions, and monitor live logs</p>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center space-x-3 mb-6">
        <button
          onClick={() => router.push('/dashboard/playbooks')}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded shadow-sm"
        >
          🧭 Back to Dashboard
        </button>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded shadow-sm ${
              activeTab === tab
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4 border border-gray-200">
        {activeTab === 'General Info' && (
          <>
            <p>📂 <strong>Path:</strong> {playbook.path}</p>
            <p>🗒️ <strong>Description:</strong> {playbook.description}</p>
            <p>🏷️ <strong>Tags:</strong> {playbook.tags.join(', ')}</p>
            <p>🕒 <strong>Last Executed:</strong> {executionDate || 'Not yet run'}</p>

            {/* Execution Controls */}
            <div className="mt-6 space-x-4">
              <button
                onClick={() => {
                  setOutput([]);
                  setActiveTab('Live Output');
                  setExecutionDate(new Date().toLocaleString());
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-sm"
              >
                ▶️ Run Playbook
              </button>
              <button
                disabled={!executionDate}
                onClick={() => {
                  setOutput([]);
                  setActiveTab('Live Output');
                }}
                className={`px-4 py-2 rounded shadow-sm ${
                  executionDate
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                🔁 Rerun Last Execution
              </button>
            </div>
          </>
        )}

        {activeTab === 'Live Output' && (
          <>
            <h3 className="text-lg text-green-600 font-semibold">🖥️ Output Stream</h3>
            <div className="bg-gray-900 p-4 rounded-lg h-96 overflow-y-auto text-green-400 font-mono text-sm border border-green-600 shadow-inner">
              {output.length > 0 ? (
                output.map((line, idx) => <div key={idx}>{line}</div>)
              ) : (
                <div className="text-gray-500 italic">Waiting for output...</div>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
