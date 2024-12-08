import React from 'react';
import { Users, Clock, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PollCard({ poll, onClose }) {
  return (
    <div className="p-4 border border-gray-200 rounded hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-black">{poll.question}</h3>
        <div className="flex items-center gap-2">
          {poll.active && (
            <>
              <Link
                to={`/poll/${poll.id}`}
                className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                title="View Poll"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Close Poll"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
        <span className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {poll.votes} votes
        </span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {poll.created}
        </span>
        <span
          className={`px-2 py-0.5 rounded text-xs ${
            poll.active
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {poll.active ? 'Active' : 'Closed'}
        </span>
      </div>
      <div className="space-y-3">
        {poll.options.map((option, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-100 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: `${option.percentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>{option.text}</span>
              <span>{option.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}