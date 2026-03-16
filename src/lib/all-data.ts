import { AllData } from "./types";

export const ALL_DATA: AllData = {
  "Paragon Motors of Woodside Inc dba Paragon Honda": {
    "sections": [
      "Sales Inbound",
      "Service Inbound",
      "Service Outbound"
    ],
    "period": "Aug '25 — Mar '26",
    "monthsActive": 8,
    "hero": {
      "totalCalls": 3686,
      "qualifiedCalls": 1480,
      "appointments": 205,
      "routedToTeam": 683,
      "qualRate": 40.2,
      "afterHoursShare": 42.1,
      "salesAppts": 114,
      "serviceAppts": 91,
      "callbacks": 621,
      "warmTransfers": 62
    },
    "heroMonthly": [
      {
        "label": "Aug",
        "calls": 36,
        "qual": 15,
        "appts": 3,
        "routed": 0
      },
      {
        "label": "Sep",
        "calls": 1129,
        "qual": 400,
        "appts": 61,
        "routed": 55
      },
      {
        "label": "Oct",
        "calls": 449,
        "qual": 211,
        "appts": 22,
        "routed": 86
      },
      {
        "label": "Nov",
        "calls": 573,
        "qual": 288,
        "appts": 57,
        "routed": 169
      },
      {
        "label": "Dec",
        "calls": 603,
        "qual": 266,
        "appts": 28,
        "routed": 233
      },
      {
        "label": "Jan",
        "calls": 643,
        "qual": 209,
        "appts": 22,
        "routed": 70
      },
      {
        "label": "Feb",
        "calls": 141,
        "qual": 69,
        "appts": 9,
        "routed": 35
      },
      {
        "label": "Mar",
        "calls": 112,
        "qual": 22,
        "appts": 3,
        "routed": 35
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 2060,
        "qualifiedCalls": 879,
        "queryResolved": 548,
        "callbacks": 582,
        "warmTransfers": 59,
        "appointments": 114,
        "routedToTeam": 641,
        "avgScore": 6.3,
        "avgDuration": 1.46,
        "resRate": 26.6,
        "qualRate": 42.7,
        "duringHours": 1154,
        "afterHours": 906,
        "sentiment": {
          "angry": 16,
          "happy": 167,
          "neutral": 1864,
          "sad": 13
        },
        "monthly": [
          {
            "label": "Aug '25",
            "total_calls": 31,
            "qualified_calls": 15,
            "appointments": 3
          },
          {
            "label": "Sep '25",
            "total_calls": 336,
            "qualified_calls": 106,
            "appointments": 7
          },
          {
            "label": "Oct '25",
            "total_calls": 201,
            "qualified_calls": 105,
            "appointments": 12
          },
          {
            "label": "Nov '25",
            "total_calls": 480,
            "qualified_calls": 220,
            "appointments": 40
          },
          {
            "label": "Dec '25",
            "total_calls": 564,
            "qualified_calls": 248,
            "appointments": 28
          },
          {
            "label": "Jan '26",
            "total_calls": 205,
            "qualified_calls": 95,
            "appointments": 12
          },
          {
            "label": "Feb '26",
            "total_calls": 131,
            "qualified_calls": 68,
            "appointments": 9
          },
          {
            "label": "Mar '26",
            "total_calls": 112,
            "qualified_calls": 22,
            "appointments": 3
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 55,
        "qualifiedCalls": 9,
        "queryResolved": 10,
        "callbacks": 1,
        "warmTransfers": 0,
        "appointments": 7,
        "routedToTeam": 1,
        "avgScore": null,
        "avgDuration": 0.8,
        "resRate": 18.2,
        "qualRate": 16.4,
        "duringHours": 53,
        "afterHours": 2,
        "sentiment": null,
        "monthly": [
          {
            "label": "Aug '25",
            "total_calls": 5,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Sep '25",
            "total_calls": 43,
            "qualified_calls": 8,
            "appointments": 7
          },
          {
            "label": "Jan '26",
            "total_calls": 7,
            "qualified_calls": 1,
            "appointments": 0
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 1571,
        "qualifiedCalls": 592,
        "queryResolved": 147,
        "callbacks": 38,
        "warmTransfers": 3,
        "appointments": 84,
        "routedToTeam": 41,
        "avgScore": 7.8,
        "avgDuration": 0.69,
        "resRate": 9.4,
        "qualRate": 37.7,
        "duringHours": 928,
        "afterHours": 643,
        "sentiment": null,
        "monthly": [
          {
            "label": "Sep '25",
            "total_calls": 750,
            "qualified_calls": 286,
            "appointments": 47
          },
          {
            "label": "Oct '25",
            "total_calls": 248,
            "qualified_calls": 106,
            "appointments": 10
          },
          {
            "label": "Nov '25",
            "total_calls": 93,
            "qualified_calls": 68,
            "appointments": 17
          },
          {
            "label": "Dec '25",
            "total_calls": 39,
            "qualified_calls": 18,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 431,
            "qualified_calls": 113,
            "appointments": 10
          },
          {
            "label": "Feb '26",
            "total_calls": 10,
            "qualified_calls": 1,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "General Sales Inquiry",
          "value": 440
        },
        {
          "label": "Call Aborted",
          "value": 239
        },
        {
          "label": "Connect with Service Team",
          "value": 212
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 138
        },
        {
          "label": "Schedule Test Drive",
          "value": 121
        },
        {
          "label": "Follow-Up Required",
          "value": 120
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 93
        },
        {
          "label": "Transferred to Human",
          "value": 59
        }
      ],
      "Service Inbound": null,
      "Service Outbound": null
    }
  },
  "Drive Nation Auto": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Dec '25 — Dec '25",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 10,
      "qualifiedCalls": 8,
      "appointments": 2,
      "routedToTeam": 3,
      "qualRate": 80.0,
      "afterHoursShare": 10.0,
      "salesAppts": 1,
      "serviceAppts": 1,
      "callbacks": 1,
      "warmTransfers": 2
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 10,
        "qual": 8,
        "appts": 2,
        "routed": 3
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 8,
        "qualifiedCalls": 7,
        "queryResolved": 2,
        "callbacks": 1,
        "warmTransfers": 2,
        "appointments": 1,
        "routedToTeam": 3,
        "avgScore": 9.0,
        "avgDuration": 1.83,
        "resRate": 25.0,
        "qualRate": 87.5,
        "duringHours": 8,
        "afterHours": 0,
        "sentiment": {
          "happy": 1,
          "neutral": 7
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 8,
            "qualified_calls": 7,
            "appointments": 1
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 2,
        "qualifiedCalls": 1,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 1,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.18,
        "resRate": 0.0,
        "qualRate": 50.0,
        "duringHours": 1,
        "afterHours": 1,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 2,
            "qualified_calls": 1,
            "appointments": 1
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Transferred to Human",
          "value": 2
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 2
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 1
        },
        {
          "label": "Call Aborted",
          "value": 1
        },
        {
          "label": "Schedule Test Drive",
          "value": 1
        },
        {
          "label": "Request Vehicle Information",
          "value": 1
        }
      ],
      "Service Inbound": null
    }
  },
  "Pinnacle Peak Auto Sales": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Feb '26 — Mar '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 8,
      "qualifiedCalls": 4,
      "appointments": 3,
      "routedToTeam": 0,
      "qualRate": 50.0,
      "afterHoursShare": 25.0,
      "salesAppts": 3,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 6,
        "qual": 4,
        "appts": 3,
        "routed": 0
      },
      {
        "label": "Mar",
        "calls": 2,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 8,
        "qualifiedCalls": 4,
        "queryResolved": 3,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 3,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.72,
        "resRate": 37.5,
        "qualRate": 50.0,
        "duringHours": 6,
        "afterHours": 2,
        "sentiment": {
          "happy": 3,
          "neutral": 5
        },
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 6,
            "qualified_calls": 4,
            "appointments": 3
          },
          {
            "label": "Mar '26",
            "total_calls": 2,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "General Sales Inquiry",
          "value": 4
        },
        {
          "label": "Schedule Test Drive",
          "value": 2
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 1
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 1
        }
      ]
    }
  },
  "Austin Ford CDJR": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound"
    ],
    "period": "Jan '26 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 60,
      "qualifiedCalls": 1,
      "appointments": 0,
      "routedToTeam": 6,
      "qualRate": 1.7,
      "afterHoursShare": 41.7,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 4,
      "warmTransfers": 1
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 25,
        "qual": 0,
        "appts": 0,
        "routed": 1
      },
      {
        "label": "Feb",
        "calls": 35,
        "qual": 1,
        "appts": 0,
        "routed": 1
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 35,
        "qualifiedCalls": 0,
        "queryResolved": 9,
        "callbacks": 4,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 3,
        "avgScore": 6.4,
        "avgDuration": 1.56,
        "resRate": 25.7,
        "qualRate": 0.0,
        "duringHours": 19,
        "afterHours": 16,
        "sentiment": {
          "angry": 1,
          "happy": 2,
          "neutral": 31,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 12,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 23,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 25,
        "qualifiedCalls": 1,
        "queryResolved": 7,
        "callbacks": 0,
        "warmTransfers": 1,
        "appointments": 0,
        "routedToTeam": 3,
        "avgScore": 6.1,
        "avgDuration": 2.42,
        "resRate": 28.0,
        "qualRate": 4.0,
        "duringHours": 16,
        "afterHours": 9,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 13,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 12,
            "qualified_calls": 1,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 15
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 12
        },
        {
          "label": "Follow-Up Required",
          "value": 8
        }
      ],
      "Sales Outbound": [
        {
          "label": "Call Aborted",
          "value": 10
        },
        {
          "label": "Transferred to Human",
          "value": 4
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 3
        },
        {
          "label": "Follow-Up Required",
          "value": 3
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 2
        },
        {
          "label": "Request Vehicle Information",
          "value": 2
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 1
        }
      ]
    }
  },
  "Autos of Forney": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Feb '26 — Mar '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 3,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 0.0,
      "afterHoursShare": 66.7,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 1,
        "qual": 0,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Mar",
        "calls": 2,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 3,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 2.38,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 1,
        "afterHours": 2,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 2,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": null
    }
  },
  "Brandon Steven Motors": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Feb '26 — Mar '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 62,
      "qualifiedCalls": 38,
      "appointments": 16,
      "routedToTeam": 6,
      "qualRate": 61.3,
      "afterHoursShare": 24.2,
      "salesAppts": 4,
      "serviceAppts": 12,
      "callbacks": 3,
      "warmTransfers": 3
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 22,
        "qual": 12,
        "appts": 6,
        "routed": 1
      },
      {
        "label": "Mar",
        "calls": 40,
        "qual": 26,
        "appts": 10,
        "routed": 4
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 18,
        "qualifiedCalls": 18,
        "queryResolved": 4,
        "callbacks": 1,
        "warmTransfers": 1,
        "appointments": 4,
        "routedToTeam": 2,
        "avgScore": 5.6,
        "avgDuration": 1.2,
        "resRate": 22.2,
        "qualRate": 100.0,
        "duringHours": 11,
        "afterHours": 7,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 7,
            "qualified_calls": 7,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 11,
            "qualified_calls": 11,
            "appointments": 3
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 44,
        "qualifiedCalls": 20,
        "queryResolved": 14,
        "callbacks": 2,
        "warmTransfers": 2,
        "appointments": 12,
        "routedToTeam": 4,
        "avgScore": 7.3,
        "avgDuration": 1.1,
        "resRate": 31.8,
        "qualRate": 45.5,
        "duringHours": 36,
        "afterHours": 8,
        "sentiment": {
          "angry": 1,
          "happy": 4,
          "neutral": 38,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 15,
            "qualified_calls": 5,
            "appointments": 5
          },
          {
            "label": "Mar '26",
            "total_calls": 29,
            "qualified_calls": 15,
            "appointments": 7
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 5
        },
        {
          "label": "Schedule Test Drive",
          "value": 4
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 4
        },
        {
          "label": "Follow-Up Required",
          "value": 3
        },
        {
          "label": "Request Vehicle Information",
          "value": 1
        },
        {
          "label": "General Sales Inquiry",
          "value": 1
        }
      ],
      "Service Inbound": [
        {
          "label": "General Service Inquiry",
          "value": 9
        },
        {
          "label": "Transferred to Service Team",
          "value": 8
        },
        {
          "label": "Follow-Up Required",
          "value": 7
        },
        {
          "label": "Recall Information",
          "value": 7
        },
        {
          "label": "Parts Inquiry",
          "value": 6
        },
        {
          "label": "Call Aborted",
          "value": 5
        },
        {
          "label": "Warranty Question",
          "value": 2
        }
      ]
    }
  },
  "Bridge Auto Group": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound"
    ],
    "period": "Jul '25 — Mar '26",
    "monthsActive": 9,
    "hero": {
      "totalCalls": 466,
      "qualifiedCalls": 238,
      "appointments": 40,
      "routedToTeam": 34,
      "qualRate": 51.1,
      "afterHoursShare": 37.3,
      "salesAppts": 40,
      "serviceAppts": 0,
      "callbacks": 37,
      "warmTransfers": 28
    },
    "heroMonthly": [
      {
        "label": "Jul",
        "calls": 52,
        "qual": 27,
        "appts": 5,
        "routed": 3
      },
      {
        "label": "Aug",
        "calls": 40,
        "qual": 23,
        "appts": 3,
        "routed": 4
      },
      {
        "label": "Sep",
        "calls": 78,
        "qual": 35,
        "appts": 5,
        "routed": 8
      },
      {
        "label": "Oct",
        "calls": 54,
        "qual": 29,
        "appts": 3,
        "routed": 2
      },
      {
        "label": "Nov",
        "calls": 32,
        "qual": 16,
        "appts": 1,
        "routed": 1
      },
      {
        "label": "Dec",
        "calls": 54,
        "qual": 22,
        "appts": 2,
        "routed": 3
      },
      {
        "label": "Jan",
        "calls": 54,
        "qual": 25,
        "appts": 3,
        "routed": 3
      },
      {
        "label": "Feb",
        "calls": 49,
        "qual": 36,
        "appts": 3,
        "routed": 3
      },
      {
        "label": "Mar",
        "calls": 53,
        "qual": 25,
        "appts": 15,
        "routed": 5
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 167,
        "qualifiedCalls": 139,
        "queryResolved": 19,
        "callbacks": 22,
        "warmTransfers": 12,
        "appointments": 10,
        "routedToTeam": 10,
        "avgScore": 5.8,
        "avgDuration": 2.05,
        "resRate": 11.4,
        "qualRate": 83.2,
        "duringHours": 116,
        "afterHours": 51,
        "sentiment": {
          "angry": 4,
          "happy": 10,
          "neutral": 151,
          "sad": 2
        },
        "monthly": [
          {
            "label": "Jul '25",
            "total_calls": 17,
            "qualified_calls": 17,
            "appointments": 0
          },
          {
            "label": "Aug '25",
            "total_calls": 17,
            "qualified_calls": 15,
            "appointments": 1
          },
          {
            "label": "Sep '25",
            "total_calls": 29,
            "qualified_calls": 19,
            "appointments": 2
          },
          {
            "label": "Oct '25",
            "total_calls": 25,
            "qualified_calls": 21,
            "appointments": 1
          },
          {
            "label": "Nov '25",
            "total_calls": 11,
            "qualified_calls": 9,
            "appointments": 0
          },
          {
            "label": "Dec '25",
            "total_calls": 17,
            "qualified_calls": 12,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 10,
            "qualified_calls": 10,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 30,
            "qualified_calls": 29,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 11,
            "qualified_calls": 7,
            "appointments": 5
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 299,
        "qualifiedCalls": 99,
        "queryResolved": 35,
        "callbacks": 15,
        "warmTransfers": 16,
        "appointments": 30,
        "routedToTeam": 24,
        "avgScore": 9.2,
        "avgDuration": 1.68,
        "resRate": 11.7,
        "qualRate": 33.1,
        "duringHours": 176,
        "afterHours": 123,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jul '25",
            "total_calls": 35,
            "qualified_calls": 10,
            "appointments": 5
          },
          {
            "label": "Aug '25",
            "total_calls": 23,
            "qualified_calls": 8,
            "appointments": 2
          },
          {
            "label": "Sep '25",
            "total_calls": 49,
            "qualified_calls": 16,
            "appointments": 3
          },
          {
            "label": "Oct '25",
            "total_calls": 29,
            "qualified_calls": 8,
            "appointments": 2
          },
          {
            "label": "Nov '25",
            "total_calls": 21,
            "qualified_calls": 7,
            "appointments": 1
          },
          {
            "label": "Dec '25",
            "total_calls": 37,
            "qualified_calls": 10,
            "appointments": 2
          },
          {
            "label": "Jan '26",
            "total_calls": 44,
            "qualified_calls": 15,
            "appointments": 3
          },
          {
            "label": "Feb '26",
            "total_calls": 19,
            "qualified_calls": 7,
            "appointments": 2
          },
          {
            "label": "Mar '26",
            "total_calls": 42,
            "qualified_calls": 18,
            "appointments": 10
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "General Sales Inquiry",
          "value": 75
        },
        {
          "label": "Transferred to Human",
          "value": 68
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 24
        }
      ],
      "Sales Outbound": [
        {
          "label": "Schedule Test Drive",
          "value": 115
        },
        {
          "label": "Request Vehicle Information",
          "value": 67
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 61
        },
        {
          "label": "Call Aborted",
          "value": 56
        }
      ]
    }
  },
  "Bridgeton Auto Mall": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound",
      "Service Inbound",
      "Service Outbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 344,
      "qualifiedCalls": 142,
      "appointments": 11,
      "routedToTeam": 49,
      "qualRate": 41.3,
      "afterHoursShare": 30.2,
      "salesAppts": 7,
      "serviceAppts": 4,
      "callbacks": 23,
      "warmTransfers": 17
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 86,
        "qual": 26,
        "appts": 1,
        "routed": 7
      },
      {
        "label": "Jan",
        "calls": 72,
        "qual": 31,
        "appts": 2,
        "routed": 8
      },
      {
        "label": "Feb",
        "calls": 95,
        "qual": 35,
        "appts": 2,
        "routed": 3
      },
      {
        "label": "Mar",
        "calls": 91,
        "qual": 50,
        "appts": 6,
        "routed": 3
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 129,
        "qualifiedCalls": 37,
        "queryResolved": 38,
        "callbacks": 10,
        "warmTransfers": 5,
        "appointments": 3,
        "routedToTeam": 24,
        "avgScore": 7.7,
        "avgDuration": 1.96,
        "resRate": 29.5,
        "qualRate": 28.7,
        "duringHours": 109,
        "afterHours": 20,
        "sentiment": {
          "angry": 1,
          "happy": 10,
          "neutral": 116,
          "sad": 2
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 45,
            "qualified_calls": 10,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 16,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 33,
            "qualified_calls": 12,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 35,
            "qualified_calls": 12,
            "appointments": 3
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 66,
        "qualifiedCalls": 16,
        "queryResolved": 7,
        "callbacks": 2,
        "warmTransfers": 3,
        "appointments": 4,
        "routedToTeam": 9,
        "avgScore": 6.0,
        "avgDuration": 2.29,
        "resRate": 10.6,
        "qualRate": 24.2,
        "duringHours": 40,
        "afterHours": 26,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 18,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Jan '26",
            "total_calls": 16,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 20,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 12,
            "qualified_calls": 7,
            "appointments": 1
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 106,
        "qualifiedCalls": 71,
        "queryResolved": 16,
        "callbacks": 7,
        "warmTransfers": 6,
        "appointments": 3,
        "routedToTeam": 10,
        "avgScore": 8.5,
        "avgDuration": 0.74,
        "resRate": 15.1,
        "qualRate": 67.0,
        "duringHours": 68,
        "afterHours": 38,
        "sentiment": {
          "angry": 1,
          "happy": 15,
          "neutral": 88,
          "sad": 2
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 18,
            "qualified_calls": 11,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 32,
            "qualified_calls": 21,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 32,
            "qualified_calls": 17,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 24,
            "qualified_calls": 22,
            "appointments": 1
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 43,
        "qualifiedCalls": 18,
        "queryResolved": 11,
        "callbacks": 4,
        "warmTransfers": 3,
        "appointments": 1,
        "routedToTeam": 6,
        "avgScore": 8.8,
        "avgDuration": 1.17,
        "resRate": 25.6,
        "qualRate": 41.9,
        "duringHours": 23,
        "afterHours": 20,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 5,
            "qualified_calls": 2,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 8,
            "qualified_calls": 4,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 10,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 20,
            "qualified_calls": 9,
            "appointments": 1
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Request Vehicle Information",
          "value": 67
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 31
        },
        {
          "label": "Follow-Up Required",
          "value": 31
        }
      ],
      "Sales Outbound": [
        {
          "label": "Schedule Test Drive",
          "value": 29
        },
        {
          "label": "Follow-Up Required",
          "value": 13
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 11
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 7
        },
        {
          "label": "General Sales Inquiry",
          "value": 6
        }
      ],
      "Service Inbound": [
        {
          "label": "Recall Information",
          "value": 44
        },
        {
          "label": "General Service Inquiry",
          "value": 28
        },
        {
          "label": "Parts Inquiry",
          "value": 23
        },
        {
          "label": "Transferred to Service Team",
          "value": 11
        }
      ],
      "Service Outbound": [
        {
          "label": "Call Aborted",
          "value": 20
        },
        {
          "label": "Recall Information",
          "value": 12
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 11
        }
      ]
    }
  },
  "Call Source": {
    "sections": [
      "Service Inbound"
    ],
    "period": "Nov '25 — Jan '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 1044,
      "qualifiedCalls": 615,
      "appointments": 157,
      "routedToTeam": 68,
      "qualRate": 58.9,
      "afterHoursShare": 21.6,
      "salesAppts": 0,
      "serviceAppts": 157,
      "callbacks": 49,
      "warmTransfers": 28
    },
    "heroMonthly": [
      {
        "label": "Nov",
        "calls": 201,
        "qual": 104,
        "appts": 42,
        "routed": 21
      },
      {
        "label": "Dec",
        "calls": 233,
        "qual": 161,
        "appts": 47,
        "routed": 27
      },
      {
        "label": "Jan",
        "calls": 610,
        "qual": 350,
        "appts": 68,
        "routed": 62
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 1044,
        "qualifiedCalls": 615,
        "queryResolved": 339,
        "callbacks": 49,
        "warmTransfers": 28,
        "appointments": 157,
        "routedToTeam": 68,
        "avgScore": 9.0,
        "avgDuration": 1.37,
        "resRate": 32.5,
        "qualRate": 58.9,
        "duringHours": 818,
        "afterHours": 226,
        "sentiment": {
          "angry": 21,
          "happy": 68,
          "neutral": 936,
          "sad": 19
        },
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 201,
            "qualified_calls": 104,
            "appointments": 42
          },
          {
            "label": "Dec '25",
            "total_calls": 233,
            "qualified_calls": 161,
            "appointments": 47
          },
          {
            "label": "Jan '26",
            "total_calls": 610,
            "qualified_calls": 350,
            "appointments": 68
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": [
        {
          "label": "Service Appointment Scheduled",
          "value": 250
        },
        {
          "label": "General Service Inquiry",
          "value": 218
        },
        {
          "label": "Parts Inquiry",
          "value": 212
        },
        {
          "label": "Call Aborted",
          "value": 192
        },
        {
          "label": "Transferred to Service Team",
          "value": 103
        },
        {
          "label": "Recall Information",
          "value": 69
        }
      ]
    }
  },
  "Capital Chevrolet Inc.": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Aug '25 — Sep '25",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 25,
      "qualifiedCalls": 20,
      "appointments": 3,
      "routedToTeam": 4,
      "qualRate": 80.0,
      "afterHoursShare": 40.0,
      "salesAppts": 3,
      "serviceAppts": 0,
      "callbacks": 1,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Aug",
        "calls": 18,
        "qual": 17,
        "appts": 1,
        "routed": 0
      },
      {
        "label": "Sep",
        "calls": 7,
        "qual": 3,
        "appts": 2,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 25,
        "qualifiedCalls": 20,
        "queryResolved": 7,
        "callbacks": 1,
        "warmTransfers": 0,
        "appointments": 3,
        "routedToTeam": 4,
        "avgScore": 5.6,
        "avgDuration": 0.97,
        "resRate": 28.0,
        "qualRate": 80.0,
        "duringHours": 15,
        "afterHours": 10,
        "sentiment": {
          "angry": 1,
          "happy": 3,
          "neutral": 20,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Aug '25",
            "total_calls": 18,
            "qualified_calls": 17,
            "appointments": 1
          },
          {
            "label": "Sep '25",
            "total_calls": 7,
            "qualified_calls": 3,
            "appointments": 2
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Request Vehicle Information",
          "value": 6
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 6
        },
        {
          "label": "General Sales Inquiry",
          "value": 5
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 4
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 3
        },
        {
          "label": "Call Aborted",
          "value": 1
        }
      ]
    }
  },
  "DeNooyer Chevrolet Kalamazoo": {
    "sections": [
      "Service Inbound"
    ],
    "period": "Jan '26 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 4,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 0.0,
      "afterHoursShare": 50.0,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 2,
        "qual": 0,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 2,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 4,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.59,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 2,
        "afterHours": 2,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 2,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 2,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": null
    }
  },
  "Edwards Chevrolet Downtown": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Jan '26 — Mar '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 940,
      "qualifiedCalls": 245,
      "appointments": 35,
      "routedToTeam": 96,
      "qualRate": 26.1,
      "afterHoursShare": 24.3,
      "salesAppts": 11,
      "serviceAppts": 24,
      "callbacks": 82,
      "warmTransfers": 47
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 264,
        "qual": 75,
        "appts": 9,
        "routed": 14
      },
      {
        "label": "Feb",
        "calls": 478,
        "qual": 124,
        "appts": 10,
        "routed": 42
      },
      {
        "label": "Mar",
        "calls": 198,
        "qual": 46,
        "appts": 16,
        "routed": 16
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 718,
        "qualifiedCalls": 157,
        "queryResolved": 233,
        "callbacks": 61,
        "warmTransfers": 40,
        "appointments": 11,
        "routedToTeam": 71,
        "avgScore": 7.7,
        "avgDuration": 0.96,
        "resRate": 32.5,
        "qualRate": 21.9,
        "duringHours": 545,
        "afterHours": 173,
        "sentiment": {
          "angry": 15,
          "happy": 63,
          "neutral": 629,
          "sad": 11
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 219,
            "qualified_calls": 59,
            "appointments": 3
          },
          {
            "label": "Feb '26",
            "total_calls": 383,
            "qualified_calls": 91,
            "appointments": 3
          },
          {
            "label": "Mar '26",
            "total_calls": 116,
            "qualified_calls": 7,
            "appointments": 5
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 222,
        "qualifiedCalls": 88,
        "queryResolved": 65,
        "callbacks": 21,
        "warmTransfers": 7,
        "appointments": 24,
        "routedToTeam": 25,
        "avgScore": 7.5,
        "avgDuration": 2.11,
        "resRate": 29.3,
        "qualRate": 39.6,
        "duringHours": 167,
        "afterHours": 55,
        "sentiment": {
          "angry": 6,
          "happy": 27,
          "neutral": 186,
          "sad": 3
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 45,
            "qualified_calls": 16,
            "appointments": 6
          },
          {
            "label": "Feb '26",
            "total_calls": 95,
            "qualified_calls": 33,
            "appointments": 7
          },
          {
            "label": "Mar '26",
            "total_calls": 82,
            "qualified_calls": 39,
            "appointments": 11
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Schedule Test Drive",
          "value": 327
        },
        {
          "label": "Follow-Up Required",
          "value": 279
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 112
        }
      ],
      "Service Inbound": [
        {
          "label": "Transferred to Service Team",
          "value": 105
        },
        {
          "label": "Warranty Question",
          "value": 89
        },
        {
          "label": "Recall Information",
          "value": 28
        }
      ]
    }
  },
  "Feldman Chevrolet of Novi": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 472,
      "qualifiedCalls": 226,
      "appointments": 28,
      "routedToTeam": 34,
      "qualRate": 47.9,
      "afterHoursShare": 31.4,
      "salesAppts": 8,
      "serviceAppts": 20,
      "callbacks": 51,
      "warmTransfers": 16
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 137,
        "qual": 71,
        "appts": 7,
        "routed": 7
      },
      {
        "label": "Jan",
        "calls": 145,
        "qual": 69,
        "appts": 11,
        "routed": 7
      },
      {
        "label": "Feb",
        "calls": 100,
        "qual": 40,
        "appts": 6,
        "routed": 5
      },
      {
        "label": "Mar",
        "calls": 90,
        "qual": 46,
        "appts": 4,
        "routed": 7
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 211,
        "qualifiedCalls": 130,
        "queryResolved": 30,
        "callbacks": 30,
        "warmTransfers": 9,
        "appointments": 8,
        "routedToTeam": 12,
        "avgScore": 8.9,
        "avgDuration": 1.47,
        "resRate": 14.2,
        "qualRate": 61.6,
        "duringHours": 131,
        "afterHours": 80,
        "sentiment": {
          "angry": 5,
          "happy": 24,
          "neutral": 178,
          "sad": 4
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 65,
            "qualified_calls": 43,
            "appointments": 1
          },
          {
            "label": "Jan '26",
            "total_calls": 48,
            "qualified_calls": 34,
            "appointments": 2
          },
          {
            "label": "Feb '26",
            "total_calls": 33,
            "qualified_calls": 15,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 65,
            "qualified_calls": 38,
            "appointments": 4
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 261,
        "qualifiedCalls": 96,
        "queryResolved": 74,
        "callbacks": 21,
        "warmTransfers": 7,
        "appointments": 20,
        "routedToTeam": 22,
        "avgScore": 8.6,
        "avgDuration": 1.59,
        "resRate": 28.4,
        "qualRate": 36.8,
        "duringHours": 193,
        "afterHours": 68,
        "sentiment": {
          "angry": 5,
          "happy": 20,
          "neutral": 235,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 72,
            "qualified_calls": 28,
            "appointments": 6
          },
          {
            "label": "Jan '26",
            "total_calls": 97,
            "qualified_calls": 35,
            "appointments": 9
          },
          {
            "label": "Feb '26",
            "total_calls": 67,
            "qualified_calls": 25,
            "appointments": 5
          },
          {
            "label": "Mar '26",
            "total_calls": 25,
            "qualified_calls": 8,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Vehicle Availability Inquiry",
          "value": 79
        },
        {
          "label": "Schedule Test Drive",
          "value": 63
        },
        {
          "label": "Transferred to Human",
          "value": 39
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 30
        }
      ],
      "Service Inbound": [
        {
          "label": "Warranty Question",
          "value": 74
        },
        {
          "label": "Transferred to Service Team",
          "value": 71
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 56
        },
        {
          "label": "General Service Inquiry",
          "value": 45
        },
        {
          "label": "Follow-Up Required",
          "value": 15
        }
      ]
    }
  },
  "Feldmann Imports Inc.": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Jan '26 — Mar '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 796,
      "qualifiedCalls": 267,
      "appointments": 79,
      "routedToTeam": 110,
      "qualRate": 33.5,
      "afterHoursShare": 37.7,
      "salesAppts": 38,
      "serviceAppts": 41,
      "callbacks": 77,
      "warmTransfers": 50
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 396,
        "qual": 142,
        "appts": 45,
        "routed": 21
      },
      {
        "label": "Feb",
        "calls": 194,
        "qual": 81,
        "appts": 24,
        "routed": 22
      },
      {
        "label": "Mar",
        "calls": 206,
        "qual": 44,
        "appts": 10,
        "routed": 13
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 579,
        "qualifiedCalls": 145,
        "queryResolved": 164,
        "callbacks": 71,
        "warmTransfers": 42,
        "appointments": 38,
        "routedToTeam": 71,
        "avgScore": 7.4,
        "avgDuration": 1.34,
        "resRate": 28.3,
        "qualRate": 25.0,
        "duringHours": 365,
        "afterHours": 214,
        "sentiment": {
          "angry": 12,
          "happy": 75,
          "neutral": 483,
          "sad": 9
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 295,
            "qualified_calls": 69,
            "appointments": 26
          },
          {
            "label": "Feb '26",
            "total_calls": 107,
            "qualified_calls": 32,
            "appointments": 7
          },
          {
            "label": "Mar '26",
            "total_calls": 177,
            "qualified_calls": 44,
            "appointments": 5
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 217,
        "qualifiedCalls": 122,
        "queryResolved": 57,
        "callbacks": 6,
        "warmTransfers": 8,
        "appointments": 41,
        "routedToTeam": 39,
        "avgScore": 6.5,
        "avgDuration": 1.22,
        "resRate": 26.3,
        "qualRate": 56.2,
        "duringHours": 131,
        "afterHours": 86,
        "sentiment": {
          "angry": 3,
          "happy": 18,
          "neutral": 193,
          "sad": 3
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 101,
            "qualified_calls": 73,
            "appointments": 19
          },
          {
            "label": "Feb '26",
            "total_calls": 87,
            "qualified_calls": 49,
            "appointments": 17
          },
          {
            "label": "Mar '26",
            "total_calls": 29,
            "qualified_calls": 0,
            "appointments": 5
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 308
        },
        {
          "label": "General Sales Inquiry",
          "value": 160
        },
        {
          "label": "Request Vehicle Information",
          "value": 111
        }
      ],
      "Service Inbound": [
        {
          "label": "Service Appointment Scheduled",
          "value": 111
        },
        {
          "label": "Follow-Up Required",
          "value": 73
        },
        {
          "label": "Warranty Question",
          "value": 33
        }
      ]
    }
  },
  "Genesis of Winston-Salem": {
    "sections": [
      "Service Inbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 848,
      "qualifiedCalls": 355,
      "appointments": 242,
      "routedToTeam": 146,
      "qualRate": 41.9,
      "afterHoursShare": 16.2,
      "salesAppts": 0,
      "serviceAppts": 242,
      "callbacks": 99,
      "warmTransfers": 15
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 89,
        "qual": 41,
        "appts": 27,
        "routed": 5
      },
      {
        "label": "Jan",
        "calls": 147,
        "qual": 51,
        "appts": 50,
        "routed": 13
      },
      {
        "label": "Feb",
        "calls": 168,
        "qual": 81,
        "appts": 32,
        "routed": 6
      },
      {
        "label": "Mar",
        "calls": 444,
        "qual": 182,
        "appts": 133,
        "routed": 40
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 848,
        "qualifiedCalls": 355,
        "queryResolved": 213,
        "callbacks": 99,
        "warmTransfers": 15,
        "appointments": 242,
        "routedToTeam": 146,
        "avgScore": 5.9,
        "avgDuration": 0.65,
        "resRate": 25.1,
        "qualRate": 41.9,
        "duringHours": 711,
        "afterHours": 137,
        "sentiment": {
          "angry": 10,
          "happy": 99,
          "neutral": 723,
          "sad": 16
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 89,
            "qualified_calls": 41,
            "appointments": 27
          },
          {
            "label": "Jan '26",
            "total_calls": 147,
            "qualified_calls": 51,
            "appointments": 50
          },
          {
            "label": "Feb '26",
            "total_calls": 168,
            "qualified_calls": 81,
            "appointments": 32
          },
          {
            "label": "Mar '26",
            "total_calls": 444,
            "qualified_calls": 182,
            "appointments": 133
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": [
        {
          "label": "General Service Inquiry",
          "value": 289
        },
        {
          "label": "Parts Inquiry",
          "value": 252
        },
        {
          "label": "Call Aborted",
          "value": 165
        },
        {
          "label": "Recall Information",
          "value": 142
        }
      ]
    }
  },
  "Guam Autospot": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Feb '26 — Mar '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 74,
      "qualifiedCalls": 60,
      "appointments": 18,
      "routedToTeam": 7,
      "qualRate": 81.1,
      "afterHoursShare": 20.3,
      "salesAppts": 10,
      "serviceAppts": 8,
      "callbacks": 9,
      "warmTransfers": 3
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 20,
        "qual": 16,
        "appts": 2,
        "routed": 1
      },
      {
        "label": "Mar",
        "calls": 54,
        "qual": 44,
        "appts": 16,
        "routed": 5
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 16,
        "qualifiedCalls": 16,
        "queryResolved": 3,
        "callbacks": 1,
        "warmTransfers": 0,
        "appointments": 10,
        "routedToTeam": 1,
        "avgScore": 7.3,
        "avgDuration": 0.89,
        "resRate": 18.8,
        "qualRate": 100.0,
        "duringHours": 13,
        "afterHours": 3,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 3,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 13,
            "qualified_calls": 13,
            "appointments": 10
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 58,
        "qualifiedCalls": 44,
        "queryResolved": 14,
        "callbacks": 8,
        "warmTransfers": 3,
        "appointments": 8,
        "routedToTeam": 6,
        "avgScore": 7.9,
        "avgDuration": 1.21,
        "resRate": 24.1,
        "qualRate": 75.9,
        "duringHours": 46,
        "afterHours": 12,
        "sentiment": {
          "angry": 1,
          "happy": 8,
          "neutral": 48,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 17,
            "qualified_calls": 13,
            "appointments": 2
          },
          {
            "label": "Mar '26",
            "total_calls": 41,
            "qualified_calls": 31,
            "appointments": 6
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Appointment for Purchase Discussion",
          "value": 5
        },
        {
          "label": "Transferred to Human",
          "value": 3
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 2
        },
        {
          "label": "General Sales Inquiry",
          "value": 2
        },
        {
          "label": "Schedule Test Drive",
          "value": 2
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 1
        },
        {
          "label": "Call Aborted",
          "value": 1
        }
      ],
      "Service Inbound": [
        {
          "label": "Service Appointment Scheduled",
          "value": 10
        },
        {
          "label": "Recall Information",
          "value": 10
        },
        {
          "label": "General Service Inquiry",
          "value": 9
        },
        {
          "label": "Warranty Question",
          "value": 9
        },
        {
          "label": "Parts Inquiry",
          "value": 8
        },
        {
          "label": "Call Aborted",
          "value": 7
        },
        {
          "label": "Transferred to Service Team",
          "value": 5
        }
      ]
    }
  },
  "I 40 Auto": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Sep '25 — Mar '26",
    "monthsActive": 7,
    "hero": {
      "totalCalls": 985,
      "qualifiedCalls": 544,
      "appointments": 73,
      "routedToTeam": 156,
      "qualRate": 55.2,
      "afterHoursShare": 15.7,
      "salesAppts": 73,
      "serviceAppts": 0,
      "callbacks": 47,
      "warmTransfers": 43
    },
    "heroMonthly": [
      {
        "label": "Sep",
        "calls": 71,
        "qual": 39,
        "appts": 4,
        "routed": 3
      },
      {
        "label": "Oct",
        "calls": 101,
        "qual": 64,
        "appts": 6,
        "routed": 3
      },
      {
        "label": "Nov",
        "calls": 200,
        "qual": 123,
        "appts": 11,
        "routed": 15
      },
      {
        "label": "Dec",
        "calls": 117,
        "qual": 54,
        "appts": 5,
        "routed": 6
      },
      {
        "label": "Jan",
        "calls": 181,
        "qual": 81,
        "appts": 8,
        "routed": 21
      },
      {
        "label": "Feb",
        "calls": 152,
        "qual": 85,
        "appts": 14,
        "routed": 12
      },
      {
        "label": "Mar",
        "calls": 163,
        "qual": 98,
        "appts": 25,
        "routed": 15
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 985,
        "qualifiedCalls": 544,
        "queryResolved": 144,
        "callbacks": 47,
        "warmTransfers": 43,
        "appointments": 73,
        "routedToTeam": 156,
        "avgScore": 7.6,
        "avgDuration": 1.14,
        "resRate": 14.6,
        "qualRate": 55.2,
        "duringHours": 830,
        "afterHours": 155,
        "sentiment": {
          "angry": 7,
          "happy": 68,
          "neutral": 902,
          "sad": 8
        },
        "monthly": [
          {
            "label": "Sep '25",
            "total_calls": 71,
            "qualified_calls": 39,
            "appointments": 4
          },
          {
            "label": "Oct '25",
            "total_calls": 101,
            "qualified_calls": 64,
            "appointments": 6
          },
          {
            "label": "Nov '25",
            "total_calls": 200,
            "qualified_calls": 123,
            "appointments": 11
          },
          {
            "label": "Dec '25",
            "total_calls": 117,
            "qualified_calls": 54,
            "appointments": 5
          },
          {
            "label": "Jan '26",
            "total_calls": 181,
            "qualified_calls": 81,
            "appointments": 8
          },
          {
            "label": "Feb '26",
            "total_calls": 152,
            "qualified_calls": 85,
            "appointments": 14
          },
          {
            "label": "Mar '26",
            "total_calls": 163,
            "qualified_calls": 98,
            "appointments": 25
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 324
        },
        {
          "label": "Call Aborted",
          "value": 260
        },
        {
          "label": "General Sales Inquiry",
          "value": 219
        },
        {
          "label": "Follow-Up Required",
          "value": 182
        }
      ]
    }
  },
  "INFINITI West Chester": {
    "sections": [
      "Service Inbound",
      "Service Outbound"
    ],
    "period": "Jan '26 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 15,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 1,
      "qualRate": 0.0,
      "afterHoursShare": 46.7,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 4,
        "qual": 0,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 11,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 11,
        "qualifiedCalls": 0,
        "queryResolved": 1,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 1,
        "avgScore": 8.7,
        "avgDuration": 2.4,
        "resRate": 9.1,
        "qualRate": 0.0,
        "duringHours": 6,
        "afterHours": 5,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 3,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 8,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 4,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 2.33,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 2,
        "afterHours": 2,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 3,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": [
        {
          "label": "Recall Information",
          "value": 7
        },
        {
          "label": "Warranty Question",
          "value": 3
        },
        {
          "label": "Follow-Up Required",
          "value": 1
        }
      ],
      "Service Outbound": null
    }
  },
  "Impex Auto Sales": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Sep '25 — Sep '25",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 7,
      "qualifiedCalls": 3,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 42.9,
      "afterHoursShare": 42.9,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Sep",
        "calls": 7,
        "qual": 3,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 7,
        "qualifiedCalls": 3,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.06,
        "resRate": 0.0,
        "qualRate": 42.9,
        "duringHours": 4,
        "afterHours": 3,
        "sentiment": null,
        "monthly": [
          {
            "label": "Sep '25",
            "total_calls": 7,
            "qualified_calls": 3,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "General Sales Inquiry",
          "value": 4
        },
        {
          "label": "Transferred to Human",
          "value": 3
        }
      ]
    }
  },
  "J and S Auto Haus": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Feb '26 — Feb '26",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 1,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 0.0,
      "afterHoursShare": 0.0,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 1,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 1,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.46,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 1,
        "afterHours": 0,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": null
    }
  },
  "James Martin Chevrolet Buick Inc.": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound",
      "Service Inbound"
    ],
    "period": "Jan '26 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 505,
      "qualifiedCalls": 38,
      "appointments": 8,
      "routedToTeam": 44,
      "qualRate": 7.5,
      "afterHoursShare": 27.9,
      "salesAppts": 5,
      "serviceAppts": 3,
      "callbacks": 19,
      "warmTransfers": 13
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 320,
        "qual": 25,
        "appts": 5,
        "routed": 27
      },
      {
        "label": "Feb",
        "calls": 185,
        "qual": 13,
        "appts": 3,
        "routed": 13
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 253,
        "qualifiedCalls": 14,
        "queryResolved": 77,
        "callbacks": 7,
        "warmTransfers": 5,
        "appointments": 4,
        "routedToTeam": 24,
        "avgScore": 7.8,
        "avgDuration": 1.15,
        "resRate": 30.4,
        "qualRate": 5.5,
        "duringHours": 195,
        "afterHours": 58,
        "sentiment": {
          "angry": 2,
          "happy": 30,
          "neutral": 218,
          "sad": 3
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 133,
            "qualified_calls": 8,
            "appointments": 2
          },
          {
            "label": "Feb '26",
            "total_calls": 120,
            "qualified_calls": 6,
            "appointments": 2
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 169,
        "qualifiedCalls": 14,
        "queryResolved": 20,
        "callbacks": 4,
        "warmTransfers": 6,
        "appointments": 1,
        "routedToTeam": 16,
        "avgScore": 5.9,
        "avgDuration": 2.43,
        "resRate": 11.8,
        "qualRate": 8.3,
        "duringHours": 105,
        "afterHours": 64,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 129,
            "qualified_calls": 10,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 40,
            "qualified_calls": 4,
            "appointments": 1
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 83,
        "qualifiedCalls": 10,
        "queryResolved": 29,
        "callbacks": 8,
        "warmTransfers": 2,
        "appointments": 3,
        "routedToTeam": 4,
        "avgScore": 7.4,
        "avgDuration": 1.84,
        "resRate": 34.9,
        "qualRate": 12.0,
        "duringHours": 64,
        "afterHours": 19,
        "sentiment": {
          "angry": 2,
          "happy": 5,
          "neutral": 75,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 58,
            "qualified_calls": 7,
            "appointments": 3
          },
          {
            "label": "Feb '26",
            "total_calls": 25,
            "qualified_calls": 3,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 111
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 75
        },
        {
          "label": "Transferred to Human",
          "value": 67
        }
      ],
      "Sales Outbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 55
        },
        {
          "label": "Transferred to Human",
          "value": 50
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 34
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 30
        }
      ],
      "Service Inbound": [
        {
          "label": "Warranty Question",
          "value": 47
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 19
        },
        {
          "label": "Call Aborted",
          "value": 17
        }
      ]
    }
  },
  "John Hiester Chevrolet": {
    "sections": [
      "Service Inbound",
      "Service Outbound"
    ],
    "period": "Aug '25 — Mar '26",
    "monthsActive": 8,
    "hero": {
      "totalCalls": 259,
      "qualifiedCalls": 122,
      "appointments": 33,
      "routedToTeam": 41,
      "qualRate": 47.1,
      "afterHoursShare": 22.8,
      "salesAppts": 0,
      "serviceAppts": 33,
      "callbacks": 27,
      "warmTransfers": 8
    },
    "heroMonthly": [
      {
        "label": "Aug",
        "calls": 18,
        "qual": 6,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Sep",
        "calls": 43,
        "qual": 18,
        "appts": 3,
        "routed": 2
      },
      {
        "label": "Oct",
        "calls": 30,
        "qual": 11,
        "appts": 4,
        "routed": 3
      },
      {
        "label": "Nov",
        "calls": 16,
        "qual": 7,
        "appts": 0,
        "routed": 1
      },
      {
        "label": "Dec",
        "calls": 33,
        "qual": 16,
        "appts": 5,
        "routed": 1
      },
      {
        "label": "Jan",
        "calls": 44,
        "qual": 22,
        "appts": 4,
        "routed": 3
      },
      {
        "label": "Feb",
        "calls": 41,
        "qual": 16,
        "appts": 4,
        "routed": 4
      },
      {
        "label": "Mar",
        "calls": 34,
        "qual": 26,
        "appts": 13,
        "routed": 2
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 171,
        "qualifiedCalls": 87,
        "queryResolved": 26,
        "callbacks": 22,
        "warmTransfers": 3,
        "appointments": 22,
        "routedToTeam": 32,
        "avgScore": 6.1,
        "avgDuration": 2.37,
        "resRate": 15.2,
        "qualRate": 50.9,
        "duringHours": 127,
        "afterHours": 44,
        "sentiment": {
          "angry": 2,
          "happy": 20,
          "neutral": 148,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Aug '25",
            "total_calls": 8,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Sep '25",
            "total_calls": 33,
            "qualified_calls": 14,
            "appointments": 2
          },
          {
            "label": "Oct '25",
            "total_calls": 20,
            "qualified_calls": 8,
            "appointments": 3
          },
          {
            "label": "Nov '25",
            "total_calls": 10,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Dec '25",
            "total_calls": 25,
            "qualified_calls": 13,
            "appointments": 4
          },
          {
            "label": "Jan '26",
            "total_calls": 28,
            "qualified_calls": 16,
            "appointments": 2
          },
          {
            "label": "Feb '26",
            "total_calls": 23,
            "qualified_calls": 8,
            "appointments": 2
          },
          {
            "label": "Mar '26",
            "total_calls": 24,
            "qualified_calls": 20,
            "appointments": 9
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 88,
        "qualifiedCalls": 35,
        "queryResolved": 19,
        "callbacks": 5,
        "warmTransfers": 5,
        "appointments": 11,
        "routedToTeam": 9,
        "avgScore": 9.0,
        "avgDuration": 2.46,
        "resRate": 21.6,
        "qualRate": 39.8,
        "duringHours": 73,
        "afterHours": 15,
        "sentiment": null,
        "monthly": [
          {
            "label": "Aug '25",
            "total_calls": 10,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Sep '25",
            "total_calls": 10,
            "qualified_calls": 4,
            "appointments": 1
          },
          {
            "label": "Oct '25",
            "total_calls": 10,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Nov '25",
            "total_calls": 6,
            "qualified_calls": 2,
            "appointments": 0
          },
          {
            "label": "Dec '25",
            "total_calls": 8,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Jan '26",
            "total_calls": 16,
            "qualified_calls": 6,
            "appointments": 2
          },
          {
            "label": "Feb '26",
            "total_calls": 18,
            "qualified_calls": 8,
            "appointments": 2
          },
          {
            "label": "Mar '26",
            "total_calls": 10,
            "qualified_calls": 6,
            "appointments": 4
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": [
        {
          "label": "Warranty Question",
          "value": 66
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 58
        },
        {
          "label": "General Service Inquiry",
          "value": 27
        },
        {
          "label": "Recall Information",
          "value": 20
        }
      ],
      "Service Outbound": [
        {
          "label": "General Service Inquiry",
          "value": 21
        },
        {
          "label": "Recall Information",
          "value": 20
        },
        {
          "label": "Transferred to Service Team",
          "value": 18
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 16
        },
        {
          "label": "Warranty Question",
          "value": 8
        },
        {
          "label": "Parts Inquiry",
          "value": 5
        }
      ]
    }
  },
  "Lambert Buick GMC Inc": {
    "sections": [
      "Service Outbound"
    ],
    "period": "Oct '25 — Oct '25",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 495,
      "qualifiedCalls": 193,
      "appointments": 10,
      "routedToTeam": 49,
      "qualRate": 39.0,
      "afterHoursShare": 24.8,
      "salesAppts": 0,
      "serviceAppts": 10,
      "callbacks": 35,
      "warmTransfers": 7
    },
    "heroMonthly": [
      {
        "label": "Oct",
        "calls": 495,
        "qual": 193,
        "appts": 10,
        "routed": 42
      }
    ],
    "sectionData": {
      "Service Outbound": {
        "totalCalls": 495,
        "qualifiedCalls": 193,
        "queryResolved": 126,
        "callbacks": 35,
        "warmTransfers": 7,
        "appointments": 10,
        "routedToTeam": 49,
        "avgScore": 7.6,
        "avgDuration": 2.41,
        "resRate": 25.5,
        "qualRate": 39.0,
        "duringHours": 372,
        "afterHours": 123,
        "sentiment": null,
        "monthly": [
          {
            "label": "Oct '25",
            "total_calls": 495,
            "qualified_calls": 193,
            "appointments": 10
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Outbound": [
        {
          "label": "Service Appointment Scheduled",
          "value": 123
        },
        {
          "label": "Recall Information",
          "value": 107
        },
        {
          "label": "Warranty Question",
          "value": 106
        },
        {
          "label": "General Service Inquiry",
          "value": 71
        },
        {
          "label": "Call Aborted",
          "value": 47
        },
        {
          "label": "Parts Inquiry",
          "value": 41
        }
      ]
    }
  },
  "Landers Dodge Chrysler Jeep RAM": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound"
    ],
    "period": "Mar '26 — Mar '26",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 2,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 0.0,
      "afterHoursShare": 0.0,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Mar",
        "calls": 2,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 1,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.31,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 1,
        "afterHours": 0,
        "sentiment": null,
        "monthly": [
          {
            "label": "Mar '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 1,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 0.75,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 1,
        "afterHours": 0,
        "sentiment": null,
        "monthly": [
          {
            "label": "Mar '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": null,
      "Sales Outbound": null
    }
  },
  "Liberty CDJR": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Feb '26 — Feb '26",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 1,
      "qualifiedCalls": 0,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 0.0,
      "afterHoursShare": 0.0,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 1,
        "qual": 0,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 1,
        "qualifiedCalls": 0,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.08,
        "resRate": 0.0,
        "qualRate": 0.0,
        "duringHours": 1,
        "afterHours": 0,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": null
    }
  },
  "McGrath Acura of Westmont": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Nov '25 — Mar '26",
    "monthsActive": 5,
    "hero": {
      "totalCalls": 584,
      "qualifiedCalls": 254,
      "appointments": 78,
      "routedToTeam": 89,
      "qualRate": 43.5,
      "afterHoursShare": 21.9,
      "salesAppts": 57,
      "serviceAppts": 21,
      "callbacks": 60,
      "warmTransfers": 37
    },
    "heroMonthly": [
      {
        "label": "Nov",
        "calls": 149,
        "qual": 72,
        "appts": 19,
        "routed": 5
      },
      {
        "label": "Dec",
        "calls": 52,
        "qual": 25,
        "appts": 5,
        "routed": 2
      },
      {
        "label": "Jan",
        "calls": 138,
        "qual": 54,
        "appts": 12,
        "routed": 13
      },
      {
        "label": "Feb",
        "calls": 116,
        "qual": 48,
        "appts": 14,
        "routed": 5
      },
      {
        "label": "Mar",
        "calls": 129,
        "qual": 55,
        "appts": 28,
        "routed": 5
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 120,
        "qualifiedCalls": 120,
        "queryResolved": 19,
        "callbacks": 11,
        "warmTransfers": 6,
        "appointments": 57,
        "routedToTeam": 23,
        "avgScore": 9.4,
        "avgDuration": 1.85,
        "resRate": 15.8,
        "qualRate": 100.0,
        "duringHours": 76,
        "afterHours": 44,
        "sentiment": {
          "angry": 1,
          "happy": 12,
          "neutral": 106,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 29,
            "qualified_calls": 29,
            "appointments": 15
          },
          {
            "label": "Dec '25",
            "total_calls": 13,
            "qualified_calls": 12,
            "appointments": 4
          },
          {
            "label": "Jan '26",
            "total_calls": 24,
            "qualified_calls": 24,
            "appointments": 7
          },
          {
            "label": "Feb '26",
            "total_calls": 21,
            "qualified_calls": 19,
            "appointments": 9
          },
          {
            "label": "Mar '26",
            "total_calls": 33,
            "qualified_calls": 36,
            "appointments": 22
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 464,
        "qualifiedCalls": 134,
        "queryResolved": 130,
        "callbacks": 49,
        "warmTransfers": 31,
        "appointments": 21,
        "routedToTeam": 66,
        "avgScore": 8.1,
        "avgDuration": 1.19,
        "resRate": 28.0,
        "qualRate": 28.9,
        "duringHours": 380,
        "afterHours": 84,
        "sentiment": {
          "angry": 7,
          "happy": 50,
          "neutral": 400,
          "sad": 7
        },
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 120,
            "qualified_calls": 43,
            "appointments": 4
          },
          {
            "label": "Dec '25",
            "total_calls": 39,
            "qualified_calls": 13,
            "appointments": 1
          },
          {
            "label": "Jan '26",
            "total_calls": 114,
            "qualified_calls": 30,
            "appointments": 5
          },
          {
            "label": "Feb '26",
            "total_calls": 95,
            "qualified_calls": 29,
            "appointments": 5
          },
          {
            "label": "Mar '26",
            "total_calls": 96,
            "qualified_calls": 19,
            "appointments": 6
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 26
        },
        {
          "label": "Request Vehicle Information",
          "value": 23
        },
        {
          "label": "Follow-Up Required",
          "value": 22
        },
        {
          "label": "Transferred to Human",
          "value": 20
        },
        {
          "label": "Call Aborted",
          "value": 12
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 11
        },
        {
          "label": "Schedule Test Drive",
          "value": 6
        }
      ],
      "Service Inbound": [
        {
          "label": "Follow-Up Required",
          "value": 185
        },
        {
          "label": "Warranty Question",
          "value": 118
        },
        {
          "label": "Recall Information",
          "value": 103
        },
        {
          "label": "Call Aborted",
          "value": 58
        }
      ]
    }
  },
  "Next Gear Motors": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Jul '25 — Mar '26",
    "monthsActive": 9,
    "hero": {
      "totalCalls": 732,
      "qualifiedCalls": 357,
      "appointments": 35,
      "routedToTeam": 140,
      "qualRate": 48.8,
      "afterHoursShare": 24.2,
      "salesAppts": 35,
      "serviceAppts": 0,
      "callbacks": 51,
      "warmTransfers": 26
    },
    "heroMonthly": [
      {
        "label": "Jul",
        "calls": 44,
        "qual": 21,
        "appts": 2,
        "routed": 4
      },
      {
        "label": "Aug",
        "calls": 72,
        "qual": 44,
        "appts": 2,
        "routed": 6
      },
      {
        "label": "Sep",
        "calls": 114,
        "qual": 59,
        "appts": 6,
        "routed": 13
      },
      {
        "label": "Oct",
        "calls": 59,
        "qual": 31,
        "appts": 2,
        "routed": 3
      },
      {
        "label": "Nov",
        "calls": 75,
        "qual": 40,
        "appts": 4,
        "routed": 6
      },
      {
        "label": "Dec",
        "calls": 107,
        "qual": 40,
        "appts": 2,
        "routed": 5
      },
      {
        "label": "Jan",
        "calls": 73,
        "qual": 25,
        "appts": 5,
        "routed": 5
      },
      {
        "label": "Feb",
        "calls": 113,
        "qual": 42,
        "appts": 3,
        "routed": 5
      },
      {
        "label": "Mar",
        "calls": 75,
        "qual": 55,
        "appts": 9,
        "routed": 4
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 732,
        "qualifiedCalls": 357,
        "queryResolved": 171,
        "callbacks": 51,
        "warmTransfers": 26,
        "appointments": 35,
        "routedToTeam": 140,
        "avgScore": 7.7,
        "avgDuration": 1.72,
        "resRate": 23.4,
        "qualRate": 48.8,
        "duringHours": 555,
        "afterHours": 177,
        "sentiment": {
          "angry": 16,
          "happy": 101,
          "neutral": 605,
          "sad": 10
        },
        "monthly": [
          {
            "label": "Jul '25",
            "total_calls": 44,
            "qualified_calls": 21,
            "appointments": 2
          },
          {
            "label": "Aug '25",
            "total_calls": 72,
            "qualified_calls": 44,
            "appointments": 2
          },
          {
            "label": "Sep '25",
            "total_calls": 114,
            "qualified_calls": 59,
            "appointments": 6
          },
          {
            "label": "Oct '25",
            "total_calls": 59,
            "qualified_calls": 31,
            "appointments": 2
          },
          {
            "label": "Nov '25",
            "total_calls": 75,
            "qualified_calls": 40,
            "appointments": 4
          },
          {
            "label": "Dec '25",
            "total_calls": 107,
            "qualified_calls": 40,
            "appointments": 2
          },
          {
            "label": "Jan '26",
            "total_calls": 73,
            "qualified_calls": 25,
            "appointments": 5
          },
          {
            "label": "Feb '26",
            "total_calls": 113,
            "qualified_calls": 42,
            "appointments": 3
          },
          {
            "label": "Mar '26",
            "total_calls": 75,
            "qualified_calls": 55,
            "appointments": 9
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Request Vehicle Information",
          "value": 261
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 155
        },
        {
          "label": "General Sales Inquiry",
          "value": 138
        },
        {
          "label": "Schedule Test Drive",
          "value": 91
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 87
        }
      ]
    }
  },
  "Nissan of Boone": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 617,
      "qualifiedCalls": 189,
      "appointments": 46,
      "routedToTeam": 109,
      "qualRate": 30.6,
      "afterHoursShare": 38.9,
      "salesAppts": 25,
      "serviceAppts": 21,
      "callbacks": 52,
      "warmTransfers": 17
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 113,
        "qual": 36,
        "appts": 6,
        "routed": 12
      },
      {
        "label": "Jan",
        "calls": 172,
        "qual": 39,
        "appts": 13,
        "routed": 13
      },
      {
        "label": "Feb",
        "calls": 93,
        "qual": 22,
        "appts": 6,
        "routed": 6
      },
      {
        "label": "Mar",
        "calls": 239,
        "qual": 92,
        "appts": 21,
        "routed": 27
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 368,
        "qualifiedCalls": 110,
        "queryResolved": 116,
        "callbacks": 23,
        "warmTransfers": 7,
        "appointments": 25,
        "routedToTeam": 68,
        "avgScore": 8.9,
        "avgDuration": 0.87,
        "resRate": 31.5,
        "qualRate": 29.9,
        "duringHours": 202,
        "afterHours": 166,
        "sentiment": {
          "angry": 3,
          "happy": 27,
          "neutral": 336,
          "sad": 2
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 39,
            "qualified_calls": 9,
            "appointments": 2
          },
          {
            "label": "Jan '26",
            "total_calls": 147,
            "qualified_calls": 32,
            "appointments": 12
          },
          {
            "label": "Feb '26",
            "total_calls": 62,
            "qualified_calls": 15,
            "appointments": 3
          },
          {
            "label": "Mar '26",
            "total_calls": 120,
            "qualified_calls": 54,
            "appointments": 8
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 249,
        "qualifiedCalls": 79,
        "queryResolved": 57,
        "callbacks": 29,
        "warmTransfers": 10,
        "appointments": 21,
        "routedToTeam": 41,
        "avgScore": 5.9,
        "avgDuration": 1.56,
        "resRate": 22.9,
        "qualRate": 31.7,
        "duringHours": 175,
        "afterHours": 74,
        "sentiment": {
          "angry": 7,
          "happy": 13,
          "neutral": 225,
          "sad": 4
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 74,
            "qualified_calls": 27,
            "appointments": 4
          },
          {
            "label": "Jan '26",
            "total_calls": 25,
            "qualified_calls": 7,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 31,
            "qualified_calls": 7,
            "appointments": 3
          },
          {
            "label": "Mar '26",
            "total_calls": 119,
            "qualified_calls": 38,
            "appointments": 13
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 150
        },
        {
          "label": "Transferred to Human",
          "value": 111
        },
        {
          "label": "Request Vehicle Information",
          "value": 107
        }
      ],
      "Service Inbound": [
        {
          "label": "General Service Inquiry",
          "value": 53
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 52
        },
        {
          "label": "Call Aborted",
          "value": 48
        },
        {
          "label": "Recall Information",
          "value": 43
        },
        {
          "label": "Warranty Question",
          "value": 31
        },
        {
          "label": "Follow-Up Required",
          "value": 22
        }
      ]
    }
  },
  "North End Motors": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Nov '25 — Nov '25",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 3,
      "qualifiedCalls": 2,
      "appointments": 1,
      "routedToTeam": 0,
      "qualRate": 66.7,
      "afterHoursShare": 33.3,
      "salesAppts": 1,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Nov",
        "calls": 3,
        "qual": 2,
        "appts": 1,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 3,
        "qualifiedCalls": 2,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 1,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 0.82,
        "resRate": 0.0,
        "qualRate": 66.7,
        "duringHours": 2,
        "afterHours": 1,
        "sentiment": null,
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 3,
            "qualified_calls": 2,
            "appointments": 1
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": null
    }
  },
  "PIAZZA NISSAN OF ARDMORE": {
    "sections": [
      "Sales Outbound"
    ],
    "period": "Feb '26 — Feb '26",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 6,
      "qualifiedCalls": 4,
      "appointments": 0,
      "routedToTeam": 0,
      "qualRate": 66.7,
      "afterHoursShare": 33.3,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Feb",
        "calls": 6,
        "qual": 4,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Outbound": {
        "totalCalls": 6,
        "qualifiedCalls": 4,
        "queryResolved": 1,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 0,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 1.39,
        "resRate": 16.7,
        "qualRate": 66.7,
        "duringHours": 4,
        "afterHours": 2,
        "sentiment": null,
        "monthly": [
          {
            "label": "Feb '26",
            "total_calls": 6,
            "qualified_calls": 4,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Outbound": [
        {
          "label": "Transferred to Human",
          "value": 4
        },
        {
          "label": "Call Aborted",
          "value": 2
        }
      ]
    }
  },
  "Paragon Acura": {
    "sections": [
      "Service Outbound"
    ],
    "period": "Dec '25 — Dec '25",
    "monthsActive": 1,
    "hero": {
      "totalCalls": 3,
      "qualifiedCalls": 1,
      "appointments": 1,
      "routedToTeam": 0,
      "qualRate": 33.3,
      "afterHoursShare": 33.3,
      "salesAppts": 0,
      "serviceAppts": 1,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 3,
        "qual": 1,
        "appts": 1,
        "routed": 0
      }
    ],
    "sectionData": {
      "Service Outbound": {
        "totalCalls": 3,
        "qualifiedCalls": 1,
        "queryResolved": 0,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 1,
        "routedToTeam": 0,
        "avgScore": null,
        "avgDuration": 0.77,
        "resRate": 0.0,
        "qualRate": 33.3,
        "duringHours": 2,
        "afterHours": 1,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 3,
            "qualified_calls": 1,
            "appointments": 1
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Outbound": null
    }
  },
  "Rainbow Motor Sales": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 120,
      "qualifiedCalls": 42,
      "appointments": 11,
      "routedToTeam": 15,
      "qualRate": 35.0,
      "afterHoursShare": 44.2,
      "salesAppts": 11,
      "serviceAppts": 0,
      "callbacks": 7,
      "warmTransfers": 4
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 24,
        "qual": 6,
        "appts": 1,
        "routed": 2
      },
      {
        "label": "Jan",
        "calls": 15,
        "qual": 4,
        "appts": 1,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 45,
        "qual": 22,
        "appts": 3,
        "routed": 2
      },
      {
        "label": "Mar",
        "calls": 36,
        "qual": 10,
        "appts": 6,
        "routed": 1
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 55,
        "qualifiedCalls": 27,
        "queryResolved": 18,
        "callbacks": 1,
        "warmTransfers": 1,
        "appointments": 4,
        "routedToTeam": 5,
        "avgScore": 7.5,
        "avgDuration": 0.89,
        "resRate": 32.7,
        "qualRate": 49.1,
        "duringHours": 31,
        "afterHours": 24,
        "sentiment": {
          "angry": 1,
          "happy": 7,
          "neutral": 46,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 7,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 7,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 31,
            "qualified_calls": 19,
            "appointments": 2
          },
          {
            "label": "Mar '26",
            "total_calls": 10,
            "qualified_calls": 2,
            "appointments": 2
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 65,
        "qualifiedCalls": 15,
        "queryResolved": 15,
        "callbacks": 6,
        "warmTransfers": 3,
        "appointments": 7,
        "routedToTeam": 10,
        "avgScore": 6.6,
        "avgDuration": 2.05,
        "resRate": 23.1,
        "qualRate": 23.1,
        "duringHours": 36,
        "afterHours": 29,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 17,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Jan '26",
            "total_calls": 8,
            "qualified_calls": 1,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 14,
            "qualified_calls": 3,
            "appointments": 1
          },
          {
            "label": "Mar '26",
            "total_calls": 26,
            "qualified_calls": 8,
            "appointments": 4
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Call Aborted",
          "value": 15
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 9
        },
        {
          "label": "General Sales Inquiry",
          "value": 9
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 8
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 8
        },
        {
          "label": "Follow-Up Required",
          "value": 6
        }
      ],
      "Sales Outbound": [
        {
          "label": "Appointment for Purchase Discussion",
          "value": 13
        },
        {
          "label": "Call Aborted",
          "value": 11
        },
        {
          "label": "General Sales Inquiry",
          "value": 11
        },
        {
          "label": "Request Vehicle Information",
          "value": 9
        },
        {
          "label": "Transferred to Human",
          "value": 8
        },
        {
          "label": "Follow-Up Required",
          "value": 7
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 6
        }
      ]
    }
  },
  "Rick Case Auto Group": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound"
    ],
    "period": "Dec '25 — Mar '26",
    "monthsActive": 4,
    "hero": {
      "totalCalls": 100,
      "qualifiedCalls": 19,
      "appointments": 6,
      "routedToTeam": 8,
      "qualRate": 19.0,
      "afterHoursShare": 46.0,
      "salesAppts": 6,
      "serviceAppts": 0,
      "callbacks": 5,
      "warmTransfers": 2
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 24,
        "qual": 6,
        "appts": 0,
        "routed": 2
      },
      {
        "label": "Jan",
        "calls": 31,
        "qual": 3,
        "appts": 1,
        "routed": 3
      },
      {
        "label": "Feb",
        "calls": 18,
        "qual": 1,
        "appts": 0,
        "routed": 2
      },
      {
        "label": "Mar",
        "calls": 27,
        "qual": 9,
        "appts": 5,
        "routed": 1
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 65,
        "qualifiedCalls": 5,
        "queryResolved": 9,
        "callbacks": 2,
        "warmTransfers": 1,
        "appointments": 2,
        "routedToTeam": 6,
        "avgScore": 8.5,
        "avgDuration": 0.93,
        "resRate": 13.8,
        "qualRate": 7.7,
        "duringHours": 35,
        "afterHours": 30,
        "sentiment": {
          "angry": 1,
          "happy": 7,
          "neutral": 56,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 12,
            "qualified_calls": 1,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 21,
            "qualified_calls": 1,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 15,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 17,
            "qualified_calls": 3,
            "appointments": 2
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 35,
        "qualifiedCalls": 14,
        "queryResolved": 8,
        "callbacks": 3,
        "warmTransfers": 1,
        "appointments": 4,
        "routedToTeam": 2,
        "avgScore": 6.8,
        "avgDuration": 2.12,
        "resRate": 22.9,
        "qualRate": 40.0,
        "duringHours": 19,
        "afterHours": 16,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 12,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 10,
            "qualified_calls": 2,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 3,
            "qualified_calls": 1,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 10,
            "qualified_calls": 6,
            "appointments": 3
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Schedule Test Drive",
          "value": 25
        },
        {
          "label": "Transferred to Human",
          "value": 22
        },
        {
          "label": "Request Vehicle Information",
          "value": 18
        }
      ],
      "Sales Outbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 11
        },
        {
          "label": "Schedule Test Drive",
          "value": 9
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 7
        },
        {
          "label": "Transferred to Human",
          "value": 5
        },
        {
          "label": "Call Aborted",
          "value": 3
        }
      ]
    }
  },
  "Rohrich Automotive Group": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Oct '25 — Mar '26",
    "monthsActive": 5,
    "hero": {
      "totalCalls": 44,
      "qualifiedCalls": 35,
      "appointments": 6,
      "routedToTeam": 6,
      "qualRate": 79.5,
      "afterHoursShare": 15.9,
      "salesAppts": 6,
      "serviceAppts": 0,
      "callbacks": 4,
      "warmTransfers": 3
    },
    "heroMonthly": [
      {
        "label": "Oct",
        "calls": 9,
        "qual": 5,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Nov",
        "calls": 5,
        "qual": 3,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Dec",
        "calls": 11,
        "qual": 10,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Jan",
        "calls": 7,
        "qual": 7,
        "appts": 1,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 3,
        "qual": 2,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Mar",
        "calls": 9,
        "qual": 8,
        "appts": 5,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 44,
        "qualifiedCalls": 35,
        "queryResolved": 10,
        "callbacks": 4,
        "warmTransfers": 3,
        "appointments": 6,
        "routedToTeam": 6,
        "avgScore": 6.8,
        "avgDuration": 2.44,
        "resRate": 22.7,
        "qualRate": 79.5,
        "duringHours": 37,
        "afterHours": 7,
        "sentiment": {
          "angry": 1,
          "happy": 4,
          "neutral": 38,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Oct '25",
            "total_calls": 9,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Nov '25",
            "total_calls": 5,
            "qualified_calls": 3,
            "appointments": 0
          },
          {
            "label": "Dec '25",
            "total_calls": 11,
            "qualified_calls": 10,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 7,
            "qualified_calls": 7,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 3,
            "qualified_calls": 2,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 9,
            "qualified_calls": 8,
            "appointments": 5
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "General Sales Inquiry",
          "value": 26
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 11
        },
        {
          "label": "Follow-Up Required",
          "value": 7
        }
      ]
    }
  },
  "Tropical Used Cars": {
    "sections": [
      "Sales Outbound"
    ],
    "period": "Sep '25 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 61,
      "qualifiedCalls": 34,
      "appointments": 2,
      "routedToTeam": 7,
      "qualRate": 55.7,
      "afterHoursShare": 41.0,
      "salesAppts": 2,
      "serviceAppts": 0,
      "callbacks": 3,
      "warmTransfers": 3
    },
    "heroMonthly": [
      {
        "label": "Sep",
        "calls": 14,
        "qual": 9,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Oct",
        "calls": 10,
        "qual": 5,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Nov",
        "calls": 9,
        "qual": 5,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Dec",
        "calls": 8,
        "qual": 4,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Jan",
        "calls": 10,
        "qual": 4,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 10,
        "qual": 7,
        "appts": 2,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Outbound": {
        "totalCalls": 61,
        "qualifiedCalls": 34,
        "queryResolved": 19,
        "callbacks": 3,
        "warmTransfers": 3,
        "appointments": 2,
        "routedToTeam": 7,
        "avgScore": 6.5,
        "avgDuration": 1.43,
        "resRate": 31.1,
        "qualRate": 55.7,
        "duringHours": 36,
        "afterHours": 25,
        "sentiment": null,
        "monthly": [
          {
            "label": "Sep '25",
            "total_calls": 14,
            "qualified_calls": 9,
            "appointments": 0
          },
          {
            "label": "Oct '25",
            "total_calls": 10,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Nov '25",
            "total_calls": 9,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Dec '25",
            "total_calls": 8,
            "qualified_calls": 4,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 10,
            "qualified_calls": 4,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 10,
            "qualified_calls": 7,
            "appointments": 2
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Outbound": [
        {
          "label": "Appointment for Purchase Discussion",
          "value": 19
        },
        {
          "label": "General Sales Inquiry",
          "value": 16
        },
        {
          "label": "Financing/Leasing Inquiry",
          "value": 11
        },
        {
          "label": "Request Vehicle Information",
          "value": 9
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 6
        }
      ]
    }
  },
  "Victory Automotive Group": {
    "sections": [
      "Service Inbound"
    ],
    "period": "Dec '25 — Feb '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 40,
      "qualifiedCalls": 11,
      "appointments": 0,
      "routedToTeam": 4,
      "qualRate": 27.5,
      "afterHoursShare": 27.5,
      "salesAppts": 0,
      "serviceAppts": 0,
      "callbacks": 5,
      "warmTransfers": 2
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 15,
        "qual": 5,
        "appts": 0,
        "routed": 1
      },
      {
        "label": "Jan",
        "calls": 18,
        "qual": 5,
        "appts": 0,
        "routed": 1
      },
      {
        "label": "Feb",
        "calls": 7,
        "qual": 1,
        "appts": 0,
        "routed": 0
      }
    ],
    "sectionData": {
      "Service Inbound": {
        "totalCalls": 40,
        "qualifiedCalls": 11,
        "queryResolved": 7,
        "callbacks": 5,
        "warmTransfers": 2,
        "appointments": 0,
        "routedToTeam": 4,
        "avgScore": 9.3,
        "avgDuration": 1.19,
        "resRate": 17.5,
        "qualRate": 27.5,
        "duringHours": 29,
        "afterHours": 11,
        "sentiment": {
          "angry": 1,
          "happy": 5,
          "neutral": 33,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 15,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 18,
            "qualified_calls": 5,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 7,
            "qualified_calls": 1,
            "appointments": 0
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Service Inbound": [
        {
          "label": "General Service Inquiry",
          "value": 10
        },
        {
          "label": "Parts Inquiry",
          "value": 9
        },
        {
          "label": "Follow-Up Required",
          "value": 7
        },
        {
          "label": "Transferred to Service Team",
          "value": 4
        },
        {
          "label": "Call Aborted",
          "value": 4
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 3
        },
        {
          "label": "Warranty Question",
          "value": 3
        }
      ]
    }
  },
  "Warren Chrysler Dodge Jeep Ram": {
    "sections": [
      "Sales Inbound",
      "Service Inbound"
    ],
    "period": "Nov '25 — Jan '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 409,
      "qualifiedCalls": 223,
      "appointments": 48,
      "routedToTeam": 62,
      "qualRate": 54.5,
      "afterHoursShare": 35.0,
      "salesAppts": 32,
      "serviceAppts": 16,
      "callbacks": 53,
      "warmTransfers": 20
    },
    "heroMonthly": [
      {
        "label": "Nov",
        "calls": 162,
        "qual": 94,
        "appts": 19,
        "routed": 12
      },
      {
        "label": "Dec",
        "calls": 172,
        "qual": 104,
        "appts": 20,
        "routed": 11
      },
      {
        "label": "Jan",
        "calls": 75,
        "qual": 25,
        "appts": 9,
        "routed": 3
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 119,
        "qualifiedCalls": 84,
        "queryResolved": 30,
        "callbacks": 11,
        "warmTransfers": 2,
        "appointments": 32,
        "routedToTeam": 9,
        "avgScore": 8.0,
        "avgDuration": 2.32,
        "resRate": 25.2,
        "qualRate": 70.6,
        "duringHours": 90,
        "afterHours": 29,
        "sentiment": {
          "angry": 2,
          "happy": 6,
          "neutral": 110,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 40,
            "qualified_calls": 32,
            "appointments": 11
          },
          {
            "label": "Dec '25",
            "total_calls": 41,
            "qualified_calls": 31,
            "appointments": 15
          },
          {
            "label": "Jan '26",
            "total_calls": 38,
            "qualified_calls": 21,
            "appointments": 6
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 290,
        "qualifiedCalls": 139,
        "queryResolved": 46,
        "callbacks": 42,
        "warmTransfers": 18,
        "appointments": 16,
        "routedToTeam": 53,
        "avgScore": 8.2,
        "avgDuration": 1.68,
        "resRate": 15.9,
        "qualRate": 47.9,
        "duringHours": 176,
        "afterHours": 114,
        "sentiment": {
          "angry": 4,
          "happy": 36,
          "neutral": 246,
          "sad": 4
        },
        "monthly": [
          {
            "label": "Nov '25",
            "total_calls": 122,
            "qualified_calls": 62,
            "appointments": 8
          },
          {
            "label": "Dec '25",
            "total_calls": 131,
            "qualified_calls": 73,
            "appointments": 5
          },
          {
            "label": "Jan '26",
            "total_calls": 37,
            "qualified_calls": 4,
            "appointments": 3
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Appointment for Purchase Discussion",
          "value": 41
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 34
        },
        {
          "label": "Follow-Up Required",
          "value": 23
        },
        {
          "label": "General Sales Inquiry",
          "value": 21
        }
      ],
      "Service Inbound": [
        {
          "label": "General Service Inquiry",
          "value": 127
        },
        {
          "label": "Call Aborted",
          "value": 104
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 59
        }
      ]
    }
  },
  "Watermark Ford Hyundai": {
    "sections": [
      "Sales Inbound"
    ],
    "period": "Dec '25 — Feb '26",
    "monthsActive": 2,
    "hero": {
      "totalCalls": 11,
      "qualifiedCalls": 10,
      "appointments": 1,
      "routedToTeam": 1,
      "qualRate": 90.9,
      "afterHoursShare": 45.5,
      "salesAppts": 1,
      "serviceAppts": 0,
      "callbacks": 0,
      "warmTransfers": 0
    },
    "heroMonthly": [
      {
        "label": "Dec",
        "calls": 5,
        "qual": 4,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Jan",
        "calls": 1,
        "qual": 0,
        "appts": 0,
        "routed": 0
      },
      {
        "label": "Feb",
        "calls": 5,
        "qual": 6,
        "appts": 1,
        "routed": 0
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 11,
        "qualifiedCalls": 10,
        "queryResolved": 2,
        "callbacks": 0,
        "warmTransfers": 0,
        "appointments": 1,
        "routedToTeam": 1,
        "avgScore": 9.5,
        "avgDuration": 1.31,
        "resRate": 18.2,
        "qualRate": 90.9,
        "duringHours": 6,
        "afterHours": 5,
        "sentiment": null,
        "monthly": [
          {
            "label": "Dec '25",
            "total_calls": 5,
            "qualified_calls": 4,
            "appointments": 0
          },
          {
            "label": "Jan '26",
            "total_calls": 1,
            "qualified_calls": 0,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 5,
            "qualified_calls": 6,
            "appointments": 1
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Vehicle Availability Inquiry",
          "value": 6
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 3
        },
        {
          "label": "General Sales Inquiry",
          "value": 2
        }
      ]
    }
  },
  "Wolfchase Honda and Nissan": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound",
      "Service Outbound"
    ],
    "period": "Jan '26 — Mar '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 413,
      "qualifiedCalls": 140,
      "appointments": 23,
      "routedToTeam": 49,
      "qualRate": 33.9,
      "afterHoursShare": 26.2,
      "salesAppts": 7,
      "serviceAppts": 16,
      "callbacks": 20,
      "warmTransfers": 14
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 155,
        "qual": 45,
        "appts": 9,
        "routed": 14
      },
      {
        "label": "Feb",
        "calls": 150,
        "qual": 50,
        "appts": 5,
        "routed": 8
      },
      {
        "label": "Mar",
        "calls": 108,
        "qual": 45,
        "appts": 9,
        "routed": 3
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 170,
        "qualifiedCalls": 58,
        "queryResolved": 29,
        "callbacks": 10,
        "warmTransfers": 2,
        "appointments": 3,
        "routedToTeam": 19,
        "avgScore": 7.3,
        "avgDuration": 0.81,
        "resRate": 17.1,
        "qualRate": 34.1,
        "duringHours": 133,
        "afterHours": 37,
        "sentiment": {
          "angry": 4,
          "happy": 18,
          "neutral": 147,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 40,
            "qualified_calls": 14,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 91,
            "qualified_calls": 31,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 39,
            "qualified_calls": 13,
            "appointments": 3
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 68,
        "qualifiedCalls": 38,
        "queryResolved": 13,
        "callbacks": 7,
        "warmTransfers": 1,
        "appointments": 4,
        "routedToTeam": 13,
        "avgScore": 7.6,
        "avgDuration": 1.56,
        "resRate": 19.1,
        "qualRate": 55.9,
        "duringHours": 38,
        "afterHours": 30,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 23,
            "qualified_calls": 10,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 15,
            "qualified_calls": 8,
            "appointments": 0
          },
          {
            "label": "Mar '26",
            "total_calls": 30,
            "qualified_calls": 20,
            "appointments": 3
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 175,
        "qualifiedCalls": 44,
        "queryResolved": 28,
        "callbacks": 3,
        "warmTransfers": 11,
        "appointments": 16,
        "routedToTeam": 17,
        "avgScore": 8.0,
        "avgDuration": 2.07,
        "resRate": 16.0,
        "qualRate": 25.1,
        "duringHours": 134,
        "afterHours": 41,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 92,
            "qualified_calls": 21,
            "appointments": 8
          },
          {
            "label": "Feb '26",
            "total_calls": 44,
            "qualified_calls": 11,
            "appointments": 5
          },
          {
            "label": "Mar '26",
            "total_calls": 39,
            "qualified_calls": 12,
            "appointments": 3
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 49
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 35
        },
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 23
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 22
        },
        {
          "label": "Schedule Test Drive",
          "value": 18
        },
        {
          "label": "Call Aborted",
          "value": 12
        },
        {
          "label": "Follow-Up Required",
          "value": 11
        }
      ],
      "Sales Outbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 35
        },
        {
          "label": "Follow-Up Required",
          "value": 17
        },
        {
          "label": "Transferred to Human",
          "value": 16
        }
      ],
      "Service Outbound": [
        {
          "label": "Service Appointment Scheduled",
          "value": 49
        },
        {
          "label": "Follow-Up Required",
          "value": 47
        },
        {
          "label": "Parts Inquiry",
          "value": 31
        },
        {
          "label": "General Service Inquiry",
          "value": 28
        },
        {
          "label": "Call Aborted",
          "value": 20
        }
      ]
    }
  },
  "World Car Auto Group": {
    "sections": [
      "Sales Inbound",
      "Sales Outbound",
      "Service Inbound",
      "Service Outbound"
    ],
    "period": "Jan '26 — Mar '26",
    "monthsActive": 3,
    "hero": {
      "totalCalls": 388,
      "qualifiedCalls": 138,
      "appointments": 42,
      "routedToTeam": 41,
      "qualRate": 35.6,
      "afterHoursShare": 25.5,
      "salesAppts": 24,
      "serviceAppts": 18,
      "callbacks": 24,
      "warmTransfers": 15
    },
    "heroMonthly": [
      {
        "label": "Jan",
        "calls": 91,
        "qual": 40,
        "appts": 11,
        "routed": 10
      },
      {
        "label": "Feb",
        "calls": 178,
        "qual": 51,
        "appts": 19,
        "routed": 13
      },
      {
        "label": "Mar",
        "calls": 119,
        "qual": 47,
        "appts": 12,
        "routed": 4
      }
    ],
    "sectionData": {
      "Sales Inbound": {
        "totalCalls": 53,
        "qualifiedCalls": 44,
        "queryResolved": 16,
        "callbacks": 4,
        "warmTransfers": 1,
        "appointments": 16,
        "routedToTeam": 3,
        "avgScore": 6.7,
        "avgDuration": 1.74,
        "resRate": 30.2,
        "qualRate": 83.0,
        "duringHours": 39,
        "afterHours": 14,
        "sentiment": {
          "angry": 1,
          "happy": 6,
          "neutral": 45,
          "sad": 1
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 26,
            "qualified_calls": 25,
            "appointments": 9
          },
          {
            "label": "Feb '26",
            "total_calls": 13,
            "qualified_calls": 8,
            "appointments": 4
          },
          {
            "label": "Mar '26",
            "total_calls": 14,
            "qualified_calls": 11,
            "appointments": 3
          }
        ]
      },
      "Sales Outbound": {
        "totalCalls": 93,
        "qualifiedCalls": 46,
        "queryResolved": 31,
        "callbacks": 2,
        "warmTransfers": 5,
        "appointments": 8,
        "routedToTeam": 9,
        "avgScore": 8.2,
        "avgDuration": 2.41,
        "resRate": 33.3,
        "qualRate": 49.5,
        "duringHours": 73,
        "afterHours": 20,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 13,
            "qualified_calls": 5,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 57,
            "qualified_calls": 24,
            "appointments": 7
          },
          {
            "label": "Mar '26",
            "total_calls": 23,
            "qualified_calls": 17,
            "appointments": 0
          }
        ]
      },
      "Service Inbound": {
        "totalCalls": 177,
        "qualifiedCalls": 20,
        "queryResolved": 33,
        "callbacks": 12,
        "warmTransfers": 8,
        "appointments": 8,
        "routedToTeam": 24,
        "avgScore": 9.3,
        "avgDuration": 1.31,
        "resRate": 18.6,
        "qualRate": 11.3,
        "duringHours": 133,
        "afterHours": 44,
        "sentiment": {
          "angry": 4,
          "happy": 19,
          "neutral": 152,
          "sad": 2
        },
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 33,
            "qualified_calls": 4,
            "appointments": 0
          },
          {
            "label": "Feb '26",
            "total_calls": 81,
            "qualified_calls": 6,
            "appointments": 4
          },
          {
            "label": "Mar '26",
            "total_calls": 63,
            "qualified_calls": 10,
            "appointments": 4
          }
        ]
      },
      "Service Outbound": {
        "totalCalls": 65,
        "qualifiedCalls": 28,
        "queryResolved": 12,
        "callbacks": 6,
        "warmTransfers": 1,
        "appointments": 10,
        "routedToTeam": 5,
        "avgScore": 9.5,
        "avgDuration": 1.14,
        "resRate": 18.5,
        "qualRate": 43.1,
        "duringHours": 44,
        "afterHours": 21,
        "sentiment": null,
        "monthly": [
          {
            "label": "Jan '26",
            "total_calls": 19,
            "qualified_calls": 6,
            "appointments": 1
          },
          {
            "label": "Feb '26",
            "total_calls": 27,
            "qualified_calls": 13,
            "appointments": 4
          },
          {
            "label": "Mar '26",
            "total_calls": 19,
            "qualified_calls": 9,
            "appointments": 5
          }
        ]
      }
    },
    "outcomesByAgent": {
      "Sales Inbound": [
        {
          "label": "Operating Hours/Location Inquiry",
          "value": 28
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 17
        },
        {
          "label": "Appointment for Purchase Discussion",
          "value": 8
        }
      ],
      "Sales Outbound": [
        {
          "label": "Financing/Leasing Inquiry",
          "value": 26
        },
        {
          "label": "Call Aborted",
          "value": 23
        },
        {
          "label": "Follow-Up Required",
          "value": 18
        },
        {
          "label": "Vehicle Availability Inquiry",
          "value": 17
        },
        {
          "label": "Request Vehicle Information",
          "value": 9
        }
      ],
      "Service Inbound": [
        {
          "label": "Transferred to Service Team",
          "value": 41
        },
        {
          "label": "Service Appointment Scheduled",
          "value": 37
        },
        {
          "label": "General Service Inquiry",
          "value": 28
        },
        {
          "label": "Parts Inquiry",
          "value": 24
        },
        {
          "label": "Recall Information",
          "value": 21
        },
        {
          "label": "Warranty Question",
          "value": 15
        },
        {
          "label": "Follow-Up Required",
          "value": 11
        }
      ],
      "Service Outbound": [
        {
          "label": "Recall Information",
          "value": 27
        },
        {
          "label": "Transferred to Service Team",
          "value": 19
        },
        {
          "label": "Parts Inquiry",
          "value": 19
        }
      ]
    }
  }
};

export const ROOFTOP_NAMES: string[] = Object.keys(ALL_DATA).sort();
