/*
  Conduit Bending Calculator
  --------------------------------------------------------------
  Math is intentionally split into two categories:
  1) Universal geometry/trigonometry: formulas that do not change by conduit type.
  2) Configurable conduit/bender data: take-up, gain, radius, minimum radius,
     and field adjustments that vary by conduit type, size, and bender.

  IMPORTANT: Default conduit data below is editable placeholder data.
  Verify against the actual bender/manufacturer chart and company standard.
*/

const DEFAULT_DATA = {
  "metadata": {
    "version": 2,
    "description": "Editable conduit/bender data with ITool B2 Bender profiles added from the uploaded bend-data sticker.",
    "disclaimer": "Profile values vary by manufacturer setup, shoe, material, and field practice. Verify the ITool B2 values against your actual chart and company standard before use.",
    "addedProfiles": [
      "ITool B2 Bender"
    ]
  },
  "conduitTypes": {
    "EMT": {
      "label": "EMT",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "Hand Bender - Sample",
          "profiles": {
            "Hand Bender - Sample": {
              "takeUp90": 5,
              "gain90": 0.375,
              "bendRadius": 4,
              "minimumRadius": 4,
              "notes": "Editable default"
            },
            "Compact Bender - Sample": {
              "takeUp90": 4.75,
              "gain90": 0.3125,
              "bendRadius": 3.75,
              "minimumRadius": 3.75,
              "notes": "Editable default"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Hand Bender - Sample": {
              "takeUp90": 6,
              "gain90": 0.5,
              "bendRadius": 5.5,
              "minimumRadius": 5.5,
              "notes": "Editable default"
            },
            "Compact Bender - Sample": {
              "takeUp90": 5.75,
              "gain90": 0.4375,
              "bendRadius": 5,
              "minimumRadius": 5,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 9.125,
              "gain90": 2.3649,
              "bendRadius": 5.51,
              "minimumRadius": 5.51,
              "deduct90": 9.125,
              "minimumStubLength": 11.625,
              "lengthAdder": 2.5,
              "hookToStart": 3.125,
              "offsetX": 3.15,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 3.87,
                "30": 4.59,
                "45": 5.31,
                "60": 6.04,
                "90": 7.48,
                "22.5": 4.23
              },
              "presetBendAngles": {
                "singleStick": {
                  "15": 16.8,
                  "30": 32,
                  "45": 47.6,
                  "60": 63.6,
                  "90": 95,
                  "22.5": 24.3
                },
                "shotgun2pc": {
                  "15": 17.3,
                  "30": 32.5,
                  "45": 48.1,
                  "60": 64.1,
                  "90": 95.5,
                  "22.5": 24.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Hand Bender - Sample": {
              "takeUp90": 8,
              "gain90": 0.625,
              "bendRadius": 8,
              "minimumRadius": 8,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 10.875,
              "gain90": 3.013,
              "bendRadius": 7.02,
              "minimumRadius": 7.02,
              "deduct90": 10.875,
              "minimumStubLength": 13.375,
              "lengthAdder": 2.5,
              "hookToStart": 3.25,
              "offsetX": 3.27,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 4.19,
                "30": 5.11,
                "45": 6.03,
                "60": 6.94,
                "90": 8.78,
                "22.5": 4.65
              },
              "presetBendAngles": {
                "standard": {
                  "15": 19.8,
                  "30": 35,
                  "45": 50.6,
                  "60": 66.6,
                  "90": 98,
                  "22.5": 27.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 11,
              "gain90": 0.875,
              "bendRadius": 10,
              "minimumRadius": 10,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 13.5,
              "gain90": 3.5495,
              "bendRadius": 8.27,
              "minimumRadius": 8.27,
              "deduct90": 13.5,
              "minimumStubLength": 16,
              "lengthAdder": 2.5,
              "hookToStart": 4.5,
              "offsetX": 4.475,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.56,
                "30": 6.64,
                "45": 7.72,
                "60": 8.8,
                "90": 10.97,
                "22.5": 6.1
              },
              "presetBendAngles": {
                "standard": {
                  "15": 18.8,
                  "30": 34,
                  "45": 49.6,
                  "60": 65.6,
                  "90": 97,
                  "22.5": 26.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 13,
              "gain90": 1,
              "bendRadius": 12,
              "minimumRadius": 12,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 14,
              "gain90": 3.5881,
              "bendRadius": 8.36,
              "minimumRadius": 8.36,
              "deduct90": 14,
              "minimumStubLength": 16.5,
              "lengthAdder": 2.5,
              "hookToStart": 4.75,
              "offsetX": 4.77,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.86,
                "30": 6.96,
                "45": 8.05,
                "60": 9.15,
                "90": 11.34,
                "22.5": 6.41
              },
              "presetBendAngles": {
                "standard": {
                  "15": 17.8,
                  "30": 33,
                  "45": 48.6,
                  "60": 64.6,
                  "90": 96,
                  "22.5": 25.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 16,
              "gain90": 1.25,
              "bendRadius": 16,
              "minimumRadius": 16,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 15.5,
              "gain90": 3.9744,
              "bendRadius": 9.26,
              "minimumRadius": 9.26,
              "deduct90": 15.5,
              "minimumStubLength": 18,
              "lengthAdder": 2.5,
              "hookToStart": 5.125,
              "offsetX": 5.14,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 6.35,
                "30": 7.56,
                "45": 8.78,
                "60": 9.99,
                "90": 12.41,
                "22.5": 6.96
              },
              "presetBendAngles": {
                "standard": {
                  "15": 15.8,
                  "30": 31,
                  "45": 46.6,
                  "60": 62.6,
                  "90": 94,
                  "22.5": 23.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        }
      }
    },
    "IMC": {
      "label": "IMC",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "Rigid Style - Sample",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 6,
              "gain90": 0.5,
              "bendRadius": 5,
              "minimumRadius": 5,
              "notes": "Editable default"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 8,
              "gain90": 0.625,
              "bendRadius": 6.5,
              "minimumRadius": 6.5,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 9.5,
              "gain90": 2.3864,
              "bendRadius": 5.56,
              "minimumRadius": 5.56,
              "deduct90": 9.5,
              "minimumStubLength": 12,
              "lengthAdder": 2.5,
              "hookToStart": 3.4375,
              "offsetX": 3.42,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 4.15,
                "30": 4.88,
                "45": 5.6,
                "60": 6.33,
                "90": 7.79,
                "22.5": 4.51
              },
              "presetBendAngles": {
                "singleStick": {
                  "15": 20.8,
                  "30": 36,
                  "45": 51.6,
                  "60": 67.6,
                  "90": 99,
                  "22.5": 28.3
                },
                "shotgun2pc": {
                  "15": 21.3,
                  "30": 36.5,
                  "45": 52.1,
                  "60": 68.1,
                  "90": 99.5,
                  "22.5": 28.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [
                "Use EMT alignment-handle position (handle facing downward) for 3/4 in IMC."
              ],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 10,
              "gain90": 0.75,
              "bendRadius": 9,
              "minimumRadius": 9,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 11.25,
              "gain90": 3.0388,
              "bendRadius": 7.08,
              "minimumRadius": 7.08,
              "deduct90": 11.25,
              "minimumStubLength": 13.75,
              "lengthAdder": 2.5,
              "hookToStart": 3.5,
              "offsetX": 3.52,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 4.45,
                "30": 5.37,
                "45": 6.3,
                "60": 7.23,
                "90": 9.08,
                "22.5": 4.91
              },
              "presetBendAngles": {
                "standard": {
                  "15": 20.8,
                  "30": 36,
                  "45": 51.6,
                  "60": 67.6,
                  "90": 99,
                  "22.5": 28.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [
                "Use EMT alignment-handle position (handle facing downward) for 1 in IMC."
              ],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 12.5,
              "gain90": 1,
              "bendRadius": 11,
              "minimumRadius": 11,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 13.75,
              "gain90": 3.5753,
              "bendRadius": 8.33,
              "minimumRadius": 8.33,
              "deduct90": 13.75,
              "minimumStubLength": 16.25,
              "lengthAdder": 2.5,
              "hookToStart": 4.5625,
              "offsetX": 4.6,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.69,
                "30": 6.78,
                "45": 7.87,
                "60": 8.96,
                "90": 11.14,
                "22.5": 6.24
              },
              "presetBendAngles": {
                "standard": {
                  "15": 19.8,
                  "30": 35,
                  "45": 50.6,
                  "60": 66.6,
                  "90": 98,
                  "22.5": 27.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 14,
              "gain90": 1.125,
              "bendRadius": 13,
              "minimumRadius": 13,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 14.25,
              "gain90": 3.6182,
              "bendRadius": 8.43,
              "minimumRadius": 8.43,
              "deduct90": 14.25,
              "minimumStubLength": 16.75,
              "lengthAdder": 2.5,
              "hookToStart": 4.875,
              "offsetX": 4.88,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.98,
                "30": 7.09,
                "45": 8.19,
                "60": 9.29,
                "90": 11.5,
                "22.5": 6.54
              },
              "presetBendAngles": {
                "standard": {
                  "15": 19.3,
                  "30": 34.5,
                  "45": 50.1,
                  "60": 66.1,
                  "90": 97.5,
                  "22.5": 26.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 17,
              "gain90": 1.5,
              "bendRadius": 18,
              "minimumRadius": 18,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 15.75,
              "gain90": 4.0088,
              "bendRadius": 9.34,
              "minimumRadius": 9.34,
              "deduct90": 15.75,
              "minimumStubLength": 18.25,
              "lengthAdder": 2.5,
              "hookToStart": 5.25,
              "offsetX": 5.23,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 6.45,
                "30": 7.68,
                "45": 8.9,
                "60": 10.12,
                "90": 12.57,
                "22.5": 7.06
              },
              "presetBendAngles": {
                "standard": {
                  "15": 17.3,
                  "30": 32.5,
                  "45": 48.1,
                  "60": 64.1,
                  "90": 95.5,
                  "22.5": 24.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        }
      }
    },
    "RMC / rigid": {
      "label": "RMC / rigid",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "Rigid Style - Sample",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 6.5,
              "gain90": 0.5,
              "bendRadius": 5.5,
              "minimumRadius": 5.5,
              "notes": "Editable default"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 8.5,
              "gain90": 0.75,
              "bendRadius": 7,
              "minimumRadius": 7,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 9.5,
              "gain90": 2.395,
              "bendRadius": 5.58,
              "minimumRadius": 5.58,
              "deduct90": 9.5,
              "minimumStubLength": 12,
              "lengthAdder": 2.5,
              "hookToStart": 3.375,
              "offsetX": 3.395,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 4.13,
                "30": 4.86,
                "45": 5.59,
                "60": 6.32,
                "90": 7.78,
                "22.5": 4.49
              },
              "presetBendAngles": {
                "singleStick": {
                  "15": 20.8,
                  "30": 36,
                  "45": 51.6,
                  "60": 67.6,
                  "90": 99,
                  "22.5": 28.3
                },
                "shotgun2pc": {
                  "15": 21.3,
                  "30": 36.5,
                  "45": 52.1,
                  "60": 68.1,
                  "90": 99.5,
                  "22.5": 28.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [
                "Use EMT alignment-handle position (handle facing downward) for 3/4 in rigid."
              ],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Rigid Style - Sample": {
              "takeUp90": 11,
              "gain90": 0.875,
              "bendRadius": 10,
              "minimumRadius": 10,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 11.25,
              "gain90": 3.0431,
              "bendRadius": 7.09,
              "minimumRadius": 7.09,
              "deduct90": 11.25,
              "minimumStubLength": 13.75,
              "lengthAdder": 2.5,
              "hookToStart": 3.5,
              "offsetX": 3.5,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 4.43,
                "30": 5.36,
                "45": 6.28,
                "60": 7.21,
                "90": 9.07,
                "22.5": 4.89
              },
              "presetBendAngles": {
                "standard": {
                  "15": 18.3,
                  "30": 33.5,
                  "45": 49.1,
                  "60": 65.1,
                  "90": 96.5,
                  "22.5": 25.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [
                "Use EMT alignment-handle position (handle facing downward) for 1 in rigid."
              ],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 13.5,
              "gain90": 1.125,
              "bendRadius": 12,
              "minimumRadius": 12,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 13.75,
              "gain90": 3.5796,
              "bendRadius": 8.34,
              "minimumRadius": 8.34,
              "deduct90": 13.75,
              "minimumStubLength": 16.25,
              "lengthAdder": 2.5,
              "hookToStart": 4.5625,
              "offsetX": 4.58,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.67,
                "30": 6.76,
                "45": 7.86,
                "60": 8.95,
                "90": 11.13,
                "22.5": 6.22
              },
              "presetBendAngles": {
                "standard": {
                  "15": 20.3,
                  "30": 35.5,
                  "45": 51.1,
                  "60": 67.1,
                  "90": 98.5,
                  "22.5": 27.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 15,
              "gain90": 1.25,
              "bendRadius": 14,
              "minimumRadius": 14,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 14.25,
              "gain90": 3.6225,
              "bendRadius": 8.44,
              "minimumRadius": 8.44,
              "deduct90": 14.25,
              "minimumStubLength": 16.75,
              "lengthAdder": 2.5,
              "hookToStart": 4.875,
              "offsetX": 4.86,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 5.96,
                "30": 7.07,
                "45": 8.17,
                "60": 9.28,
                "90": 11.49,
                "22.5": 6.52
              },
              "presetBendAngles": {
                "standard": {
                  "15": 19.8,
                  "30": 35,
                  "45": 50.6,
                  "60": 66.6,
                  "90": 98,
                  "22.5": 27.3
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        },
        "2\"": {
          "defaultProfile": "ITool B2 Bender",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 19,
              "gain90": 1.625,
              "bendRadius": 19,
              "minimumRadius": 19,
              "notes": "Editable default"
            },
            "ITool B2 Bender": {
              "takeUp90": 15.75,
              "gain90": 4.0131,
              "bendRadius": 9.35,
              "minimumRadius": 9.35,
              "deduct90": 15.75,
              "minimumStubLength": 18.25,
              "lengthAdder": 2.5,
              "hookToStart": 5.25,
              "offsetX": 5.21,
              "offsetMultipliers": {
                "15": 3.9,
                "30": 2,
                "45": 1.4,
                "60": 1.2,
                "22.5": 2.6
              },
              "arcCenterFromHook": {
                "15": 6.43,
                "30": 7.66,
                "45": 8.88,
                "60": 10.11,
                "90": 12.55,
                "22.5": 7.05
              },
              "presetBendAngles": {
                "standard": {
                  "15": 16.3,
                  "30": 31.5,
                  "45": 47.1,
                  "60": 63.1,
                  "90": 94.5,
                  "22.5": 23.8
                }
              },
              "bendAngleChartNote": "Preset bend angles transcribed from the ITool B2 sticker. The sticker notes springback may change the preset bend angle needed by up to 4 degrees.",
              "gain90Source": "Estimated from centerline radius: 2R - (pi * R / 2). The sticker does not publish a back-to-back gain value.",
              "minimumRadiusSource": "Set equal to the published centerline radius because the sticker does not list a separate minimum bend radius field.",
              "dataSource": "ITool B2 bend data sticker uploaded by the user.",
              "specialHandling": [],
              "notes": "Profile built from the uploaded ITool B2 bend-data sticker. Take-up/deduct, hook-to-start, centerline radius, offset X, arc-center, and preset bend-angle values were transcribed from the sticker. gain90 is estimated from the published centerline radius because the sticker does not list gain explicitly. Verify all values against your actual bender, shoe, material, and company standard before production work."
            }
          }
        }
      }
    },
    "PVC": {
      "label": "PVC",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 5,
              "gain90": 0.375,
              "bendRadius": 6,
              "minimumRadius": 6,
              "notes": "Editable default"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 6,
              "gain90": 0.5,
              "bendRadius": 7,
              "minimumRadius": 7,
              "notes": "Editable default"
            }
          }
        },
        "1\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 8,
              "gain90": 0.625,
              "bendRadius": 10,
              "minimumRadius": 10,
              "notes": "Editable default"
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 10,
              "gain90": 0.875,
              "bendRadius": 12,
              "minimumRadius": 12,
              "notes": "Editable default"
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 12,
              "gain90": 1,
              "bendRadius": 14,
              "minimumRadius": 14,
              "notes": "Editable default"
            }
          }
        },
        "2\"": {
          "defaultProfile": "Heated Bend - Sample",
          "profiles": {
            "Heated Bend - Sample": {
              "takeUp90": 15,
              "gain90": 1.25,
              "bendRadius": 18,
              "minimumRadius": 18,
              "notes": "Editable default"
            }
          }
        }
      }
    },
    "Aluminum": {
      "label": "Aluminum",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "Aluminum Bender - Sample",
          "profiles": {
            "Aluminum Bender - Sample": {
              "takeUp90": 5.25,
              "gain90": 0.375,
              "bendRadius": 4.5,
              "minimumRadius": 4.5,
              "notes": "Editable default"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "Aluminum Bender - Sample",
          "profiles": {
            "Aluminum Bender - Sample": {
              "takeUp90": 6.25,
              "gain90": 0.5,
              "bendRadius": 5.75,
              "minimumRadius": 5.75,
              "notes": "Editable default"
            }
          }
        },
        "1\"": {
          "defaultProfile": "Aluminum Bender - Sample",
          "profiles": {
            "Aluminum Bender - Sample": {
              "takeUp90": 8.25,
              "gain90": 0.625,
              "bendRadius": 8.5,
              "minimumRadius": 8.5,
              "notes": "Editable default"
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "Mechanical - Sample",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 10.75,
              "gain90": 0.875,
              "bendRadius": 10.5,
              "minimumRadius": 10.5,
              "notes": "Editable default"
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "Mechanical - Sample",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 12.25,
              "gain90": 1,
              "bendRadius": 12.5,
              "minimumRadius": 12.5,
              "notes": "Editable default"
            }
          }
        },
        "2\"": {
          "defaultProfile": "Mechanical - Sample",
          "profiles": {
            "Mechanical - Sample": {
              "takeUp90": 15.5,
              "gain90": 1.375,
              "bendRadius": 16.5,
              "minimumRadius": 16.5,
              "notes": "Editable default"
            }
          }
        }
      }
    },
    "Custom": {
      "label": "Custom",
      "sizes": {
        "1/2\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 5,
              "gain90": 0.375,
              "bendRadius": 4,
              "minimumRadius": 4,
              "notes": "Edit these values"
            }
          }
        },
        "3/4\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 6,
              "gain90": 0.5,
              "bendRadius": 5.5,
              "minimumRadius": 5.5,
              "notes": "Edit these values"
            }
          }
        },
        "1\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 8,
              "gain90": 0.625,
              "bendRadius": 8,
              "minimumRadius": 8,
              "notes": "Edit these values"
            }
          }
        },
        "1-1/4\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 10,
              "gain90": 0.875,
              "bendRadius": 10,
              "minimumRadius": 10,
              "notes": "Edit these values"
            }
          }
        },
        "1-1/2\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 12,
              "gain90": 1,
              "bendRadius": 12,
              "minimumRadius": 12,
              "notes": "Edit these values"
            }
          }
        },
        "2\"": {
          "defaultProfile": "My Custom Bender",
          "profiles": {
            "My Custom Bender": {
              "takeUp90": 16,
              "gain90": 1.25,
              "bendRadius": 16,
              "minimumRadius": 16,
              "notes": "Edit these values"
            }
          }
        }
      }
    }
  }
};

const ANGLE_PRESETS = [10, 22.5, 30, 45, 60, 'custom'];
const BEND_LABELS = {
  stub90: '90° stub-up',
  offset: 'Offset bend',
  backToBack90: 'Back-to-back 90',
  saddle3: '3-point saddle',
  saddle4: '4-point saddle',
  kick: 'Kick bend'
};

const STOCK_LENGTH_INCHES = 120;

const state = {
  data: null,
  lastResult: null
};

const el = {
  conduitType: document.getElementById('conduitType'),
  conduitSize: document.getElementById('conduitSize'),
  benderProfile: document.getElementById('benderProfile'),
  bendType: document.getElementById('bendType'),
  referenceEnd: document.getElementById('referenceEnd'),
  dynamicFields: document.getElementById('dynamicFields'),
  messages: document.getElementById('messages'),
  resultSummary: document.getElementById('resultSummary'),
  diagramCanvas: document.getElementById('diagramCanvas'),
  dataEditor: document.getElementById('dataEditor'),
  calculatorForm: document.getElementById('calculatorForm')
};

function cloneData(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function initializeApp() {
  state.data = loadSavedData() || cloneData(DEFAULT_DATA);
  syncDataEditor();
  populateConduitTypes();
  attachEvents();
  renderDynamicFields();
  drawPlaceholder();
}

function attachEvents() {
  el.conduitType.addEventListener('change', function () {
    populateSizes();
    populateProfiles();
    renderDynamicFields();
  });

  el.conduitSize.addEventListener('change', function () {
    populateProfiles();
    renderDynamicFields();
  });

  el.benderProfile.addEventListener('change', renderDynamicFields);
  el.bendType.addEventListener('change', renderDynamicFields);
  el.referenceEnd.addEventListener('change', renderDynamicFields);

  el.dynamicFields.addEventListener('change', function (event) {
    if (!event || !event.target) return;
    if (event.target.id === 'btbSecondMeasure') {
      renderDynamicFields();
    }
  });

  el.calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearMessages();
    calculateAndRender();
  });

  document.getElementById('resetBtn').addEventListener('click', resetForm);
  document.getElementById('copyBtn').addEventListener('click', copyResult);
  document.getElementById('printBtn').addEventListener('click', function () { window.print(); });
  document.getElementById('saveDataBtn').addEventListener('click', saveDataEditor);
  document.getElementById('loadSavedBtn').addEventListener('click', loadSavedIntoEditor);
  document.getElementById('loadDefaultsBtn').addEventListener('click', function () {
    state.data = cloneData(DEFAULT_DATA);
    syncDataEditor();
    populateConduitTypes();
    renderDynamicFields();
    addMessage('info', 'Loaded editable default conduit/bender data into the editor.');
  });
}

function populateConduitTypes() {
  const keys = Object.keys(state.data.conduitTypes || {});
  const current = keys.indexOf(el.conduitType.value) >= 0 ? el.conduitType.value : keys[0];
  el.conduitType.innerHTML = keys.map(function (key) {
    return '<option value="' + escapeHtml(key) + '">' + escapeHtml(key) + '</option>';
  }).join('');
  if (current) {
    el.conduitType.value = current;
  }
  populateSizes();
  populateProfiles();
}

function populateSizes() {
  const type = getSelectedConduitType();
  const sizeMap = state.data.conduitTypes[type] ? state.data.conduitTypes[type].sizes : {};
  const sizes = Object.keys(sizeMap);
  const current = sizes.indexOf(el.conduitSize.value) >= 0 ? el.conduitSize.value : sizes[0];
  el.conduitSize.innerHTML = sizes.map(function (size) {
    return '<option value="' + escapeHtml(size) + '">' + escapeHtml(size) + '</option>';
  }).join('');
  if (current) {
    el.conduitSize.value = current;
  }
}

function populateProfiles() {
  const selection = getCurrentSelection();
  const profiles = Object.keys(selection.sizeData.profiles || {});
  const preferred = profiles.indexOf(el.benderProfile.value) >= 0
    ? el.benderProfile.value
    : (selection.sizeData.defaultProfile && profiles.indexOf(selection.sizeData.defaultProfile) >= 0
      ? selection.sizeData.defaultProfile
      : profiles[0]);

  el.benderProfile.innerHTML = profiles.map(function (profile) {
    return '<option value="' + escapeHtml(profile) + '">' + escapeHtml(profile) + '</option>';
  }).join('');

  if (preferred) {
    el.benderProfile.value = preferred;
  }
}

function captureDynamicValues() {
  const values = {};
  const nodes = el.dynamicFields.querySelectorAll('input, select, textarea');
  for (let i = 0; i < nodes.length; i += 1) {
    values[nodes[i].id] = nodes[i].value;
  }
  return values;
}

function restoreDynamicValues(values) {
  Object.keys(values).forEach(function (id) {
    const node = document.getElementById(id);
    if (node && Object.prototype.hasOwnProperty.call(values, id)) {
      node.value = values[id];
    }
  });
}

function renderDynamicFields() {
  const saved = captureDynamicValues();
  const bendType = el.bendType.value;
  const selectedReference = referenceLabel(el.referenceEnd.value);
  const oppositeReference = referenceLabel(oppositeReferenceEnd(el.referenceEnd.value));
  const btbMode = saved.btbSecondMeasure || 'spacing';

  const html = {
    stub90: [
      '<h3>90° stub-up inputs</h3>',
      '<p class="inline-note">The bend mark is calculated directly from the selected reference end (' + escapeHtml(selectedReference) + ').</p>',
      '<div class="grid two">',
      '<label><span>Desired stub length from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="stubLength" type="number" min="0" step="0.01" placeholder="e.g. 24"></label>',
      '<label><span>Take-up value override (optional inches)</span><input id="takeUpOverride" type="number" min="0" step="0.01" placeholder="Uses selected profile by default"></label>',
      '</div>'
    ].join(''),

    offset: [
      '<h3>Offset bend inputs</h3>',
      '<p class="inline-note">Enter the distance to where the offset should start from ' + escapeHtml(selectedReference) + '.</p>',
      '<div class="grid two">',
      '<label><span>Distance to start of offset from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="offsetReferenceDistance" type="number" min="0" step="0.01" placeholder="e.g. 18"></label>',
      '<label><span>Desired offset height (inches)</span><input id="offsetHeight" type="number" min="0" step="0.01" placeholder="e.g. 6"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Offset bend angle</span>',
      '<select id="offsetAnglePreset">',
      ANGLE_PRESETS.map(function (value) {
        return '<option value="' + value + '">' + (value === 'custom' ? 'Custom angle' : value + '°') + '</option>';
      }).join(''),
      '</select></label>',
      '<label><span>Custom angle (degrees, if selected)</span><input id="offsetCustomAngle" type="number" min="1" max="89" step="0.01" placeholder="e.g. 35"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Optional shrink override (inches)</span><input id="offsetShrinkOverride" type="number" min="0" step="0.01" placeholder="Geometry used by default"></label>',
      '<div class="hint-card"><strong>Offset note:</strong> spacing uses universal geometry; take-up and radius stay configurable in the profile.</div>',
      '</div>'
    ].join(''),

    backToBack90: [
      '<h3>Back-to-back 90 inputs</h3>',
      '<p class="inline-note">Set the first 90 from ' + escapeHtml(selectedReference) + '. Then choose how you want to lay out the second 90.</p>',
      '<div class="grid two">',
      '<label><span>First stub length from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="firstStubLength" type="number" min="0" step="0.01" placeholder="e.g. 20"></label>',
      '<label><span>Second 90 defined by</span>',
      '<select id="btbSecondMeasure">',
      '<option value="spacing">Bend-to-bend distance</option>',
      '<option value="oppositeStub">Second stub from ' + escapeHtml(oppositeReference) + '</option>',
      '</select></label>',
      '</div>',
      '<div class="grid two">',
      btbMode === 'oppositeStub'
        ? '<label><span>Second stub length from ' + escapeHtml(oppositeReference) + ' (inches)</span><input id="secondStubLength" type="number" min="0" step="0.01" placeholder="e.g. 18"></label>'
        : '<label><span>Distance between bends (inches)</span><input id="distanceBetween90s" type="number" min="0" step="0.01" placeholder="e.g. 36"></label>',
      '<label><span>Take-up value override (optional inches)</span><input id="btbTakeUpOverride" type="number" min="0" step="0.01" placeholder="Uses selected profile by default"></label>',
      '</div>',
      btbMode === 'oppositeStub'
        ? '<div class="hint-card"><strong>Second 90:</strong> mark the second bend from ' + escapeHtml(oppositeReference) + ' using the same take-up. Gain is not applied in opposite-end stub mode.</div>'
        : '<div class="grid two"><label><span>Gain value override (optional inches)</span><input id="btbGainOverride" type="number" min="0" step="0.01" placeholder="Uses selected profile by default"></label><div class="hint-card"><strong>Spacing mode:</strong> the second mark is corrected by gain so the finished bend-to-bend distance stays on target.</div></div>'
    ].join(''),

    saddle3: [
      '<h3>3-point saddle inputs</h3>',
      '<p class="inline-note">Use the obstruction centerline measurement from ' + escapeHtml(selectedReference) + '.</p>',
      '<div class="grid two">',
      '<label><span>Distance to obstruction centerline from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="s3CenterlineDistance" type="number" min="0" step="0.01" placeholder="e.g. 36"></label>',
      '<label><span>Obstruction height (inches)</span><input id="s3Height" type="number" min="0" step="0.01" placeholder="e.g. 4"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Obstruction width (inches)</span><input id="s3Width" type="number" min="0" step="0.01" placeholder="e.g. 6"></label>',
      '<label><span>Center angle (degrees)</span><input id="s3CenterAngle" type="number" min="1" max="89" step="0.01" value="45"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Side angle (degrees)</span><input id="s3SideAngle" type="number" min="1" max="89" step="0.01" value="22.5"></label>',
      '<div class="hint-card"><strong>Typical setup:</strong> center angle is often about twice the side angle.</div>',
      '</div>'
    ].join(''),

    saddle4: [
      '<h3>4-point saddle inputs</h3>',
      '<p class="inline-note">Use the distance to the near edge of the obstruction from ' + escapeHtml(selectedReference) + '.</p>',
      '<div class="grid two">',
      '<label><span>Distance to near edge of obstruction from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="s4NearEdgeDistance" type="number" min="0" step="0.01" placeholder="e.g. 24"></label>',
      '<label><span>Obstruction height (inches)</span><input id="s4Height" type="number" min="0" step="0.01" placeholder="e.g. 4"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Obstruction width (inches)</span><input id="s4Width" type="number" min="0" step="0.01" placeholder="e.g. 8"></label>',
      '<label><span>Chosen angle (degrees)</span><input id="s4Angle" type="number" min="1" max="89" step="0.01" value="30"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Optional shrink override (inches)</span><input id="s4ShrinkOverride" type="number" min="0" step="0.01" placeholder="Geometry used by default"></label>',
      '<div class="hint-card"><strong>4-point note:</strong> the app treats the saddle as two equal offsets separated by the flat width.</div>',
      '</div>'
    ].join(''),

    kick: [
      '<h3>Kick bend inputs</h3>',
      '<p class="inline-note">Distance to bend is measured from ' + escapeHtml(selectedReference) + '.</p>',
      '<div class="grid two">',
      '<label><span>Kick angle (degrees)</span><input id="kickAngle" type="number" min="1" max="89" step="0.01" value="15"></label>',
      '<label><span>Rise (inches)</span><input id="kickRise" type="number" min="0" step="0.01" placeholder="e.g. 3"></label>',
      '</div>',
      '<div class="grid two">',
      '<label><span>Distance to bend / tangent point from ' + escapeHtml(selectedReference) + ' (inches)</span><input id="kickDistanceToBend" type="number" min="0" step="0.01" placeholder="e.g. 20"></label>',
      '<label><span>Optional gain override (inches)</span><input id="kickGainOverride" type="number" min="0" step="0.01" placeholder="Uses selected profile by default"></label>',
      '</div>'
    ].join('')
  };

  el.dynamicFields.innerHTML = html[bendType] || '';
  restoreDynamicValues(saved);

  const activeBtb = document.getElementById('btbSecondMeasure');
  if (activeBtb && !activeBtb.value) {
    activeBtb.value = 'spacing';
  }
}

function calculateAndRender() {
  let selection;
  let common;
  let cfg;
  let result;

  try {
    selection = getCurrentSelection();
    cfg = selection.profileData;
    common = collectCommonInputs();
    validateProfileData(cfg, el.bendType.value);

    switch (el.bendType.value) {
      case 'stub90':
        result = calculateStub90(common, cfg);
        break;
      case 'offset':
        result = calculateOffset(common, cfg);
        break;
      case 'backToBack90':
        result = calculateBackToBack90(common, cfg);
        break;
      case 'saddle3':
        result = calculate3PointSaddle(common, cfg);
        break;
      case 'saddle4':
        result = calculate4PointSaddle(common, cfg);
        break;
      case 'kick':
        result = calculateKick(common, cfg);
        break;
      default:
        throw new Error('Unsupported bend type.');
    }
  } catch (error) {
    if (error && error.message) {
      addMessage('error', error.message);
    } else {
      addMessage('error', 'Unexpected calculation error.');
    }
    return;
  }

  result = applyStockConduitAssumption(result);

  if (result.errors && result.errors.length) {
    result.errors.forEach(function (message) {
      addMessage('error', message);
    });
    return;
  }

  if (result.warnings && result.warnings.length) {
    result.warnings.forEach(function (message) {
      addMessage('warn', message);
    });
  }

  state.lastResult = result;
  renderResult(result, common, selection);
  drawDiagram(result, common, selection);
}

function collectCommonInputs() {
  return {
    referenceEnd: el.referenceEnd.value || 'near',
    rounding: 'fractional',
    stockLength: STOCK_LENGTH_INCHES
  };
}

function getCurrentSelection() {
  const conduitType = getSelectedConduitType();
  const typeData = state.data.conduitTypes[conduitType];
  if (!typeData) {
    throw new Error('Selected conduit type is missing from the data table.');
  }

  const size = el.conduitSize.value || Object.keys(typeData.sizes)[0];
  const sizeData = typeData.sizes[size];
  if (!sizeData) {
    throw new Error('Selected conduit size is missing from the data table.');
  }

  const profiles = Object.keys(sizeData.profiles || {});
  const profileName = profiles.indexOf(el.benderProfile.value) >= 0
    ? el.benderProfile.value
    : (sizeData.defaultProfile && profiles.indexOf(sizeData.defaultProfile) >= 0 ? sizeData.defaultProfile : profiles[0]);
  const profileData = sizeData.profiles[profileName];

  if (!profileData) {
    throw new Error('Selected bender profile is missing from the data table.');
  }

  return {
    conduitType: conduitType,
    size: size,
    sizeData: sizeData,
    profileName: profileName,
    profileData: profileData
  };
}

function getSelectedConduitType() {
  return el.conduitType.value || Object.keys(state.data.conduitTypes)[0];
}

function validateProfileData(profileData, bendType) {
  if (!profileData) {
    throw new Error('Missing conduit/bender profile data. Check the editable data table.');
  }

  if (typeof profileData.takeUp90 !== 'number') {
    addMessage('warn', 'Selected profile is missing takeUp90. Enter an override or update the data table.');
  }

  if ((bendType === 'backToBack90' || bendType === 'kick') && typeof profileData.gain90 !== 'number') {
    addMessage('warn', 'Selected profile is missing gain90. Enter an override or update the data table.');
  }

  if (typeof profileData.bendRadius !== 'number') {
    addMessage('warn', 'Selected profile is missing bendRadius. Diagram and clearance notes may be less helpful.');
  }
}

function calculateStub90(common, cfg) {
  const stubLength = parseRequired('stubLength', 'Desired stub length');
  const takeUpOverride = parseOptional('takeUpOverride');
  const takeUp = takeUpOverride !== null ? takeUpOverride : cfg.takeUp90;
  const warnings = [];
  const errors = [];

  if (stubLength === null || stubLength <= 0) {
    errors.push('Desired stub length must be greater than zero.');
  }
  if (takeUp === null || takeUp < 0) {
    errors.push('Take-up must be available from the profile or entered as an override.');
  }

  const mark1 = stubLength - takeUp;
  if (mark1 < 0) {
    warnings.push('Computed mark falls before the selected reference end because take-up exceeds the stub length.');
  }

  return {
    bendType: 'stub90',
    marks: [makeMark('Mark 1', mark1, common.referenceEnd)],
    spacing: [],
    angles: [90],
    metrics: {
      stubLength: stubLength,
      takeUp: takeUp,
      gain: cfg.gain90 || 0,
      markOffsetFromReference: mark1,
      developedLengthAdjustment: cfg.gain90 || 0
    },
    instructions: [
      'Measure the desired stub from ' + referenceLabel(common.referenceEnd) + '.',
      'Mark ' + fmt(mark1, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + ' using a take-up of ' + fmt(takeUp, common.rounding) + '.',
      'Place the arrow on the mark and bend to 90°.',
      'Verify the finished stub in the field and adjust the editable take-up table if your bender differs.'
    ],
    warnings: warnings,
    errors: errors
  };
}

function calculateOffset(common, cfg) {
  const referenceDistance = parseRequired('offsetReferenceDistance', 'Distance to start of offset');
  const offsetHeight = parseRequired('offsetHeight', 'Offset height');
  const preset = document.getElementById('offsetAnglePreset').value;
  const customAngle = parseOptional('offsetCustomAngle');
  const angle = preset === 'custom' ? customAngle : Number(preset);
  const shrinkOverride = parseOptional('offsetShrinkOverride');
  const errors = [];
  const warnings = [];

  if (referenceDistance === null || referenceDistance < 0) {
    errors.push('Distance to start of offset must be zero or greater.');
  }
  if (offsetHeight === null || offsetHeight <= 0) {
    errors.push('Offset height must be greater than zero.');
  }
  if (angle === null || angle <= 0 || angle >= 90) {
    errors.push('Offset angle must be between 0° and 90° (exclusive).');
  }

  const distanceBetweenBends = universal.offsetSpacing(offsetHeight, angle);
  const shrink = shrinkOverride !== null ? shrinkOverride : universal.offsetShrink(offsetHeight, angle);
  const mark1 = referenceDistance - shrink;
  const mark2 = mark1 + distanceBetweenBends;

  if (mark1 < 0) {
    warnings.push('Mark 1 is before the selected reference end. Check the reference distance or shrink assumption.');
  }
  if (angle > 60) {
    warnings.push('Angles above 60° are uncommon and may be difficult or unrealistic in the field.');
  }
  if (cfg.minimumRadius && offsetHeight < cfg.minimumRadius * 0.1) {
    warnings.push('Very small offset relative to bend radius may be hard to reproduce accurately.');
  }

  return {
    bendType: 'offset',
    marks: [
      makeMark('Mark 1', mark1, common.referenceEnd),
      makeMark('Mark 2', mark2, common.referenceEnd)
    ],
    spacing: [distanceBetweenBends],
    angles: [angle, angle],
    metrics: {
      referenceDistance: referenceDistance,
      offsetHeight: offsetHeight,
      offsetMultiplier: universal.offsetMultiplier(angle),
      shrink: shrink,
      bendRadius: cfg.bendRadius
    },
    instructions: [
      'Use ' + fmtAngle(angle) + ' bends for the offset.',
      'Mark 1 at ' + fmt(mark1, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + '.',
      'Mark 2 at ' + fmt(mark2, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + '.',
      'Place the arrow on mark 1 and bend to ' + fmtAngle(angle) + '.',
      'Reverse the conduit, place the arrow on mark 2, and bend to ' + fmtAngle(angle) + ' to match the first bend.'
    ],
    warnings: warnings,
    errors: errors
  };
}

function calculateBackToBack90(common, cfg) {
  const firstStubLength = parseRequired('firstStubLength', 'First stub length');
  const mode = document.getElementById('btbSecondMeasure').value || 'spacing';
  const takeUp = parseOptional('btbTakeUpOverride') !== null ? parseOptional('btbTakeUpOverride') : cfg.takeUp90;
  const gain = parseOptional('btbGainOverride') !== null ? parseOptional('btbGainOverride') : (typeof cfg.gain90 === 'number' ? cfg.gain90 : 0);
  const errors = [];
  const warnings = [];
  const marks = [];
  const metrics = {
    firstStubLength: firstStubLength,
    secondBendMethod: mode === 'oppositeStub' ? 'Second stub from opposite end' : 'Bend-to-bend distance',
    takeUp: takeUp
  };
  const instructions = [];
  let spacing = [];

  if (firstStubLength === null || firstStubLength <= 0) {
    errors.push('First stub length must be greater than zero.');
  }
  if (takeUp === null || takeUp < 0) {
    errors.push('Take-up must be available from the profile or entered as an override.');
  }

  const firstMark = firstStubLength - takeUp;
  marks.push(makeMark('Mark 1', firstMark, common.referenceEnd));

  if (firstMark < 0) {
    warnings.push('Mark 1 is before the selected reference end because take-up exceeds the first stub length.');
  }

  instructions.push('Mark the first 90 at ' + fmt(firstMark, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + ' using a take-up of ' + fmt(takeUp, common.rounding) + '.');
  instructions.push('Bend the first 90° and keep the conduit in plane for the second bend.');

  if (mode === 'oppositeStub') {
    const secondStubLength = parseRequired('secondStubLength', 'Second stub length');
    const secondReference = oppositeReferenceEnd(common.referenceEnd);
    const secondMark = secondStubLength - takeUp;

    metrics.secondStubLength = secondStubLength;
    metrics.gain = 'Not used in opposite-end stub mode';

    if (secondStubLength === null || secondStubLength <= 0) {
      errors.push('Second stub length must be greater than zero.');
    }
    if (secondMark < 0) {
      warnings.push('Mark 2 is before the opposite reference end because take-up exceeds the second stub length.');
    }

    marks.push(makeMark('Mark 2', secondMark, secondReference));
    instructions.push('Flip or reposition the conduit and measure from ' + referenceLabel(secondReference) + '.');
    instructions.push('Mark the second 90 at ' + fmt(secondMark, common.rounding) + ' from ' + referenceLabel(secondReference) + '.');
    instructions.push('Bend the second 90° while keeping the bends aligned. Verify the finished center section against your field layout.');
  } else {
    const distanceBetween90s = parseRequired('distanceBetween90s', 'Distance between bends');
    const secondMark = firstMark + distanceBetween90s - gain;

    metrics.distanceBetween90s = distanceBetween90s;
    metrics.gain = gain;
    metrics.developedLengthAdjustment = gain;
    spacing = [secondMark - firstMark];

    if (distanceBetween90s === null || distanceBetween90s <= 0) {
      errors.push('Distance between bends must be greater than zero.');
    }
    if (secondMark <= firstMark) {
      warnings.push('Computed second mark is not beyond the first mark. Verify the distance and gain.');
    }

    marks.push(makeMark('Mark 2', secondMark, common.referenceEnd));
    instructions.push('Measure to the second 90 location and mark ' + fmt(secondMark, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + '.');
    instructions.push('Use a gain of ' + fmt(gain, common.rounding) + ' so the finished bend-to-bend spacing stays at ' + fmt(distanceBetween90s, common.rounding) + '.');
    instructions.push('Align the second bend and bend to 90°.');
  }

  return {
    bendType: 'backToBack90',
    marks: marks,
    spacing: spacing,
    angles: [90, 90],
    metrics: metrics,
    instructions: instructions,
    warnings: warnings,
    errors: errors
  };
}

function calculate3PointSaddle(common, cfg) {
  const centerlineDistance = parseRequired('s3CenterlineDistance', 'Distance to obstruction centerline');
  const height = parseRequired('s3Height', 'Obstruction height');
  const width = parseRequired('s3Width', 'Obstruction width');
  const centerAngle = parseRequired('s3CenterAngle', 'Center angle');
  const sideAngle = parseRequired('s3SideAngle', 'Side angle');
  const errors = [];
  const warnings = [];

  if ([centerlineDistance, height, width, centerAngle, sideAngle].some(function (value) { return value === null; })) {
    errors.push('All 3-point saddle inputs are required.');
  }
  if (centerlineDistance !== null && centerlineDistance < 0) {
    errors.push('Distance to obstruction centerline must be zero or greater.');
  }
  if (height !== null && height <= 0) {
    errors.push('Obstruction height must be greater than zero.');
  }
  if (width !== null && width <= 0) {
    errors.push('Obstruction width must be greater than zero.');
  }
  if (centerAngle !== null && (centerAngle <= 0 || centerAngle >= 90)) {
    errors.push('Center angle must be between 0° and 90°.');
  }
  if (sideAngle !== null && (sideAngle <= 0 || sideAngle >= 90)) {
    errors.push('Side angle must be between 0° and 90°.');
  }
  if (Math.abs(centerAngle - (2 * sideAngle)) > 0.5) {
    warnings.push('Typical 3-point saddles use a center angle about twice the side angle.');
  }

  const outsideToCenter = Math.max(universal.offsetSpacing(height, sideAngle), width / 2 + (cfg.bendRadius || 0));
  const mark2 = centerlineDistance;
  const mark1 = mark2 - outsideToCenter;
  const mark3 = mark2 + outsideToCenter;

  if (mark1 < 0) {
    warnings.push('The first outside mark falls before the selected reference end.');
  }

  return {
    bendType: 'saddle3',
    marks: [
      makeMark('Mark 1', mark1, common.referenceEnd),
      makeMark('Mark 2', mark2, common.referenceEnd),
      makeMark('Mark 3', mark3, common.referenceEnd)
    ],
    spacing: [outsideToCenter, outsideToCenter],
    angles: [sideAngle, centerAngle, sideAngle],
    metrics: {
      centerlineDistance: centerlineDistance,
      obstructionHeight: height,
      obstructionWidth: width,
      outsideToCenter: outsideToCenter,
      bendRadius: cfg.bendRadius,
      note: 'Center mark is aligned with the obstruction centerline.'
    },
    instructions: [
      'Place the center mark at ' + fmt(mark2, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + ' aligned to the obstruction centerline.',
      'Mark the outside bends at ' + fmt(mark1, common.rounding) + ' and ' + fmt(mark3, common.rounding) + '.',
      'Bend the center mark to ' + fmtAngle(centerAngle) + '.',
      'Bend each outer mark to ' + fmtAngle(sideAngle) + ' in the opposite direction to form the saddle.',
      'Check clearance over the obstruction and adjust spacing or angles to your field standard if needed.'
    ],
    warnings: warnings,
    errors: errors
  };
}

function calculate4PointSaddle(common, cfg) {
  const nearEdgeDistance = parseRequired('s4NearEdgeDistance', 'Distance to near edge of obstruction');
  const height = parseRequired('s4Height', 'Obstruction height');
  const width = parseRequired('s4Width', 'Obstruction width');
  const angle = parseRequired('s4Angle', 'Chosen angle');
  const shrinkOverride = parseOptional('s4ShrinkOverride');
  const errors = [];
  const warnings = [];

  if ([nearEdgeDistance, height, width, angle].some(function (value) { return value === null; })) {
    errors.push('All 4-point saddle inputs are required.');
  }
  if (nearEdgeDistance !== null && nearEdgeDistance < 0) {
    errors.push('Distance to near edge of obstruction must be zero or greater.');
  }
  if (height !== null && height <= 0) {
    errors.push('Obstruction height must be greater than zero.');
  }
  if (width !== null && width <= 0) {
    errors.push('Obstruction width must be greater than zero.');
  }
  if (angle !== null && (angle <= 0 || angle >= 90)) {
    errors.push('Chosen angle must be between 0° and 90°.');
  }

  const offsetSpacing = universal.offsetSpacing(height, angle);
  const shrink = shrinkOverride !== null ? shrinkOverride : universal.offsetShrink(height, angle);
  const mark1 = nearEdgeDistance - shrink;
  const mark2 = mark1 + offsetSpacing;
  const mark3 = mark2 + width;
  const mark4 = mark3 + offsetSpacing;

  if (mark1 < 0) {
    warnings.push('The first saddle mark falls before the selected reference end.');
  }

  return {
    bendType: 'saddle4',
    marks: [
      makeMark('Mark 1', mark1, common.referenceEnd),
      makeMark('Mark 2', mark2, common.referenceEnd),
      makeMark('Mark 3', mark3, common.referenceEnd),
      makeMark('Mark 4', mark4, common.referenceEnd)
    ],
    spacing: [offsetSpacing, width, offsetSpacing],
    angles: [angle, angle, angle, angle],
    metrics: {
      nearEdgeDistance: nearEdgeDistance,
      obstructionHeight: height,
      obstructionWidth: width,
      offsetSpacing: offsetSpacing,
      shrink: shrink,
      bendRadius: cfg.bendRadius
    },
    instructions: [
      'Create the first offset with marks at ' + fmt(mark1, common.rounding) + ' and ' + fmt(mark2, common.rounding) + '.',
      'Create the second offset with marks at ' + fmt(mark3, common.rounding) + ' and ' + fmt(mark4, common.rounding) + '.',
      'Bend all four marks to ' + fmtAngle(angle) + ', keeping the middle section centered over the obstruction.',
      'The flat section over the obstruction is ' + fmt(width, common.rounding) + '.'
    ],
    warnings: warnings,
    errors: errors
  };
}

function calculateKick(common, cfg) {
  const angle = parseRequired('kickAngle', 'Kick angle');
  const rise = parseRequired('kickRise', 'Rise');
  const distanceToBend = parseRequired('kickDistanceToBend', 'Distance to bend');
  const gain = parseOptional('kickGainOverride') !== null ? parseOptional('kickGainOverride') : (typeof cfg.gain90 === 'number' ? cfg.gain90 : 0);
  const errors = [];
  const warnings = [];

  if ([angle, rise, distanceToBend].some(function (value) { return value === null; })) {
    errors.push('All kick bend inputs are required.');
  }
  if (rise !== null && rise <= 0) {
    errors.push('Rise must be greater than zero.');
  }
  if (distanceToBend !== null && distanceToBend < 0) {
    errors.push('Distance to bend cannot be negative.');
  }
  if (angle !== null && (angle <= 0 || angle >= 90)) {
    errors.push('Kick angle must be between 0° and 90°.');
  }

  const travel = universal.kickTravel(rise, angle);
  const setback = universal.kickSetback(rise, angle);
  const mark1 = distanceToBend - gain;

  if (mark1 < 0) {
    warnings.push('The kick mark falls before the selected reference end.');
  }
  if (angle > 45) {
    warnings.push('Kick angles above 45° are uncommon and may need special setup.');
  }

  return {
    bendType: 'kick',
    marks: [makeMark('Mark 1', mark1, common.referenceEnd)],
    spacing: [],
    angles: [angle],
    metrics: {
      rise: rise,
      kickTravel: travel,
      kickSetback: setback,
      distanceToBend: distanceToBend,
      gain: gain
    },
    instructions: [
      'Mark the kick at ' + fmt(mark1, common.rounding) + ' from ' + referenceLabel(common.referenceEnd) + '.',
      'Bend to ' + fmtAngle(angle) + ' to produce approximately ' + fmt(rise, common.rounding) + ' of rise.',
      'This kick uses a travel of ' + fmt(travel, common.rounding) + ' and a setback of ' + fmt(setback, common.rounding) + ' based on geometry.',
      'Check the finished rise and update the editable gain value if your bender setup consistently differs.'
    ],
    warnings: warnings,
    errors: errors
  };
}

const universal = {
  degreesToRadians: function (deg) {
    return (deg * Math.PI) / 180;
  },
  offsetSpacing: function (offsetHeight, angleDeg) {
    return offsetHeight / Math.sin(this.degreesToRadians(angleDeg));
  },
  offsetMultiplier: function (angleDeg) {
    return 1 / Math.sin(this.degreesToRadians(angleDeg));
  },
  offsetShrink: function (offsetHeight, angleDeg) {
    return offsetHeight * Math.tan(this.degreesToRadians(angleDeg / 2));
  },
  kickTravel: function (rise, angleDeg) {
    return rise / Math.sin(this.degreesToRadians(angleDeg));
  },
  kickSetback: function (rise, angleDeg) {
    return rise / Math.tan(this.degreesToRadians(angleDeg));
  }
};

function absoluteMarkPosition(mark, stockLength) {
  const length = Number.isFinite(stockLength) ? stockLength : STOCK_LENGTH_INCHES;
  const position = Number(mark && mark.position);
  if (!Number.isFinite(position)) {
    return position;
  }
  return mark && mark.referenceEnd === 'far' ? length - position : position;
}

function applyStockConduitAssumption(result) {
  const enriched = result || {};
  const marks = enriched.marks || [];

  enriched.stockLength = STOCK_LENGTH_INCHES;
  enriched.warnings = enriched.warnings || [];

  marks.forEach(function (mark) {
    const absolute = absoluteMarkPosition(mark, STOCK_LENGTH_INCHES);
    mark.absolutePosition = absolute;

    if (Number.isFinite(absolute) && (absolute < 0 || absolute > STOCK_LENGTH_INCHES)) {
      enriched.warnings.push(mark.label + ' falls outside the fixed 120 in stock conduit. Check the reference end and entered dimensions.');
    }
  });

  if (enriched.bendType === 'backToBack90' && marks.length >= 2) {
    const firstAbsolute = absoluteMarkPosition(marks[0], STOCK_LENGTH_INCHES);
    const secondAbsolute = absoluteMarkPosition(marks[1], STOCK_LENGTH_INCHES);

    if (Number.isFinite(firstAbsolute) && Number.isFinite(secondAbsolute) && secondAbsolute <= firstAbsolute) {
      enriched.warnings.push('The second 90 location overlaps or passes the first bend on a 120 in stock conduit. Check the stub lengths or bend-to-bend distance.');
    }
  }

  return enriched;
}

function makeMark(label, position, referenceEnd) {
  return {
    label: label,
    position: position,
    referenceEnd: referenceEnd
  };
}

function normalizeMarks(result, common) {
  if (result.marks && result.marks.length) {
    return result.marks;
  }

  const positions = result.markPositions || [];
  return positions.map(function (value, index) {
    return makeMark('Mark ' + (index + 1), value, common.referenceEnd);
  });
}

function renderResult(result, common, selection) {
  const marks = normalizeMarks(result, common);
  const markLines = marks.map(function (mark) {
    return mark.label + ': ' + fmt(mark.position, common.rounding) + ' from ' + referenceLabel(mark.referenceEnd);
  }).join('\n');

  const spacingLines = result.spacing && result.spacing.length
    ? result.spacing.map(function (value, index) {
        return 'Distance ' + (index + 1) + ': ' + formatValue(value, common.rounding);
      }).join('\n')
    : 'Distance between bends: n/a';

  const metricsLines = Object.keys(result.metrics || {}).map(function (key) {
    return toDisplayKey(key) + ': ' + formatValue(result.metrics[key], common.rounding);
  }).join('\n');

  el.resultSummary.classList.remove('empty');
  el.resultSummary.innerHTML = [
    '<div class="eyebrow-row"><span class="eyebrow-pill">Rounded to nearest 1/16\"</span><span class="eyebrow-pill soft">120 in stock conduit</span></div>',
    '<div class="kv">',
    '<div>Conduit</div><strong>' + escapeHtml(selection.size) + ' ' + escapeHtml(selection.conduitType) + '</strong>',
    '<div>Bender profile</div><strong>' + escapeHtml(selection.profileName) + '</strong>',
    '<div>Bend type</div><strong>' + escapeHtml(BEND_LABELS[result.bendType]) + '</strong>',
    '<div>Measurement reference</div><strong>' + escapeHtml(referenceLabel(common.referenceEnd)) + '</strong>',
    '<div>Stock conduit length</div><strong>' + escapeHtml(fmt(common.stockLength, common.rounding)) + '</strong>',
    '<div>Angles</div><strong>' + escapeHtml((result.angles || []).map(function (angle) { return fmtAngle(angle); }).join(', ')) + '</strong>',
    '</div>',
    '<div><strong>Mark locations</strong>\n' + escapeHtml(markLines) + '</div>',
    '<br />',
    '<div><strong>Spacing / layout</strong>\n' + escapeHtml(spacingLines) + '</div>',
    '<br />',
    '<div><strong>Values used</strong>\n' + escapeHtml(metricsLines) + '</div>',
    '<div class="instructions">',
    '<strong>Step-by-step instructions</strong>',
    '<ol>' + (result.instructions || []).map(function (line) { return '<li>' + escapeHtml(line) + '</li>'; }).join('') + '</ol>',
    '</div>',
    '<div class="small">Profile data stays editable. Verify take-up, gain, hook marks, and radius against the actual bender chart before field use.</div>'
  ].join('');
}

function drawPlaceholder() {
  const ctx = el.diagramCanvas.getContext('2d');
  ctx.clearRect(0, 0, el.diagramCanvas.width, el.diagramCanvas.height);
  ctx.fillStyle = '#fffdf9';
  ctx.fillRect(0, 0, el.diagramCanvas.width, el.diagramCanvas.height);
  ctx.fillStyle = '#8a3f00';
  ctx.font = '24px Arial';
  ctx.fillText('Bend diagram and labeled dimensions will appear here after calculation.', 32, 60);
  ctx.font = '18px Arial';
  ctx.fillText('Fixed stock conduit length: 120 in. Diagrams label marks, heights, and bend angles.', 32, 96);
}

function drawDiagram(result, common, selection) {
  const marks = normalizeMarks(result, common);
  const canvas = el.diagramCanvas;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const padding = 70;
  const baselineY = h - 95;
  const stockLength = common.stockLength || STOCK_LENGTH_INCHES;
  const scale = (w - padding * 2) / stockLength;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#fffdf9';
  ctx.fillRect(0, 0, w, h);

  drawHorizontalMeasure(ctx, padding, w - padding, 64, '120 in stock conduit');

  ctx.strokeStyle = '#f3c18e';
  ctx.lineWidth = 1;
  for (let inch = 0; inch <= stockLength; inch += 12) {
    const x = padding + (inch * scale);
    ctx.beginPath();
    ctx.moveTo(x, baselineY - 18);
    ctx.lineTo(x, baselineY + 18);
    ctx.stroke();

    ctx.fillStyle = '#9a6b45';
    ctx.font = '12px Arial';
    ctx.fillText(String(inch), x - 8, baselineY + 36);
  }

  ctx.strokeStyle = '#8a3f00';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(padding, baselineY);
  ctx.lineTo(w - padding, baselineY);
  ctx.stroke();

  ctx.fillStyle = '#8a3f00';
  ctx.font = '18px Arial';
  ctx.fillText(selection.size + ' ' + selection.conduitType + ' | ' + BEND_LABELS[result.bendType], padding, 40);
  ctx.fillText('End A', padding - 8, baselineY + 62);
  ctx.fillText('End B', w - padding - 48, baselineY + 62);

  const plottedMarks = marks.map(function (mark, index) {
    const absolute = Number.isFinite(mark.absolutePosition)
      ? mark.absolutePosition
      : absoluteMarkPosition(mark, stockLength);
    const safeAbsolute = Math.max(Math.min(absolute, stockLength), 0);
    const x = padding + (safeAbsolute * scale);

    ctx.strokeStyle = '#ea580c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, baselineY - 56);
    ctx.lineTo(x, baselineY + 24);
    ctx.stroke();

    ctx.fillStyle = '#ea580c';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('M' + (index + 1), x - 14, baselineY - 66);

    ctx.fillStyle = '#8a3f00';
    ctx.font = '15px Arial';
    ctx.fillText(fmt(mark.position, common.rounding), x - 34, baselineY + 56);
    ctx.font = '12px Arial';
    ctx.fillText(referenceLabel(mark.referenceEnd), x - 18, baselineY + 76);

    return {
      x: x,
      label: mark.label,
      referenceEnd: mark.referenceEnd,
      absolutePosition: safeAbsolute
    };
  });

  drawSimplePath(ctx, result, plottedMarks, baselineY, padding, w, common);
}

function drawSimplePath(ctx, result, plottedMarks, baselineY, padding, width, common) {
  const xs = plottedMarks.map(function (mark) { return mark.x; }).sort(function (a, b) { return a - b; });
  const firstX = xs[0] || padding + 120;
  const lastX = xs[xs.length - 1] || padding + 240;
  const defaultRunEnd = Math.min(lastX + 150, width - padding);

  ctx.strokeStyle = '#fb923c';
  ctx.lineWidth = 8;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(padding, baselineY);

  if (result.bendType === 'stub90') {
    const x = firstX;
    const topY = baselineY - 132;
    ctx.lineTo(x, baselineY);
    ctx.lineTo(x, topY);
    ctx.stroke();

    drawVerticalMeasure(ctx, Math.min(x + 40, width - padding + 10), topY, baselineY, 'Stub height ' + fmt(result.metrics.stubLength, common.rounding));
    drawAngleBadge(ctx, Math.min(x + 14, width - 80), topY + 18, fmtAngle(90));
    return;
  }

  if (result.bendType === 'offset' && xs.length >= 2) {
    const riseY = baselineY - 86;
    const runEnd = Math.min(xs[1] + 170, width - padding);
    ctx.lineTo(xs[0], baselineY);
    ctx.lineTo(xs[1], riseY);
    ctx.lineTo(runEnd, riseY);
    ctx.stroke();

    drawVerticalMeasure(ctx, Math.min(runEnd + 14, width - padding + 12), riseY, baselineY, 'Offset height ' + fmt(result.metrics.offsetHeight, common.rounding));
    drawAngleBadge(ctx, xs[0] + 16, baselineY - 28, fmtAngle(result.angles[0]));
    drawAngleBadge(ctx, xs[1] - 10, riseY - 26, fmtAngle(result.angles[1]));
    return;
  }

  if (result.bendType === 'backToBack90' && xs.length >= 2) {
    const topY = baselineY - 112;
    ctx.lineTo(xs[0], baselineY);
    ctx.lineTo(xs[0], topY);
    ctx.lineTo(xs[1], topY);
    ctx.lineTo(xs[1], baselineY);
    ctx.lineTo(Math.min(xs[1] + 90, width - padding), baselineY);
    ctx.stroke();

    drawAngleBadge(ctx, xs[0] + 16, topY + 18, '90°');
    drawAngleBadge(ctx, xs[1] - 10, topY + 18, '90°');
    drawHorizontalMeasure(ctx, xs[0], xs[1], topY - 28, result.metrics.distanceBetween90s
      ? 'Bend-to-bend ' + fmt(result.metrics.distanceBetween90s, common.rounding)
      : 'Center section');
    return;
  }

  if (result.bendType === 'saddle3' && xs.length >= 3) {
    const peakY = baselineY - 84;
    ctx.lineTo(xs[0], baselineY);
    ctx.lineTo(xs[1], peakY);
    ctx.lineTo(xs[2], baselineY);
    ctx.lineTo(Math.min(xs[2] + 150, width - padding), baselineY);
    ctx.stroke();

    drawVerticalMeasure(ctx, xs[1] + 46, peakY, baselineY, 'Saddle height ' + fmt(result.metrics.obstructionHeight, common.rounding));
    drawAngleBadge(ctx, xs[0] + 14, baselineY - 26, fmtAngle(result.angles[0]));
    drawAngleBadge(ctx, xs[1] - 14, peakY - 28, fmtAngle(result.angles[1]));
    drawAngleBadge(ctx, xs[2] - 6, baselineY - 26, fmtAngle(result.angles[2]));
    return;
  }

  if (result.bendType === 'saddle4' && xs.length >= 4) {
    const plateauY = baselineY - 76;
    ctx.lineTo(xs[0], baselineY);
    ctx.lineTo(xs[1], plateauY);
    ctx.lineTo(xs[2], plateauY);
    ctx.lineTo(xs[3], baselineY);
    ctx.lineTo(Math.min(xs[3] + 130, width - padding), baselineY);
    ctx.stroke();

    drawVerticalMeasure(ctx, xs[2] + 42, plateauY, baselineY, 'Offset height ' + fmt(result.metrics.obstructionHeight, common.rounding));
    drawAngleBadge(ctx, xs[0] + 16, baselineY - 24, fmtAngle(result.angles[0]));
    drawAngleBadge(ctx, xs[1] - 8, plateauY - 24, fmtAngle(result.angles[1]));
    drawAngleBadge(ctx, xs[2] - 8, plateauY - 24, fmtAngle(result.angles[2]));
    drawAngleBadge(ctx, xs[3] - 8, baselineY - 24, fmtAngle(result.angles[3]));
    return;
  }

  if (result.bendType === 'kick' && xs.length >= 1) {
    const riseY = baselineY - 82;
    const runEnd = Math.min(xs[0] + 170, width - padding);
    ctx.lineTo(xs[0], baselineY);
    ctx.lineTo(runEnd, riseY);
    ctx.stroke();

    drawVerticalMeasure(ctx, Math.min(runEnd + 14, width - padding + 12), riseY, baselineY, 'Rise ' + fmt(result.metrics.rise, common.rounding));
    drawAngleBadge(ctx, xs[0] + 32, baselineY - 30, fmtAngle(result.angles[0]));
    return;
  }

  ctx.lineTo(defaultRunEnd, baselineY);
  ctx.stroke();
}

function drawVerticalMeasure(ctx, x, topY, bottomY, label) {
  const midY = (topY + bottomY) / 2;
  ctx.font = '14px Arial';

  ctx.strokeStyle = '#c2410c';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, topY);
  ctx.lineTo(x, bottomY);
  ctx.moveTo(x - 10, topY);
  ctx.lineTo(x + 10, topY);
  ctx.moveTo(x - 10, bottomY);
  ctx.lineTo(x + 10, bottomY);
  ctx.stroke();

  ctx.fillStyle = '#fff1e2';
  ctx.fillRect(x + 12, midY - 16, Math.max(ctx.measureText(label).width + 14, 120), 28);
  ctx.strokeStyle = '#f3c18e';
  ctx.strokeRect(x + 12, midY - 16, Math.max(ctx.measureText(label).width + 14, 120), 28);
  ctx.fillStyle = '#8a3f00';
  ctx.font = '14px Arial';
  ctx.fillText(label, x + 20, midY + 4);
}

function drawHorizontalMeasure(ctx, x1, x2, y, label) {
  const left = Math.min(x1, x2);
  const right = Math.max(x1, x2);
  const center = (left + right) / 2;
  ctx.font = '14px Arial';
  const labelWidth = Math.max(ctx.measureText(label).width + 18, 140);

  ctx.strokeStyle = '#c2410c';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, y);
  ctx.lineTo(right, y);
  ctx.moveTo(left, y - 8);
  ctx.lineTo(left, y + 8);
  ctx.moveTo(right, y - 8);
  ctx.lineTo(right, y + 8);
  ctx.stroke();

  ctx.fillStyle = '#fff1e2';
  ctx.fillRect(center - labelWidth / 2, y - 34, labelWidth, 24);
  ctx.strokeStyle = '#f3c18e';
  ctx.strokeRect(center - labelWidth / 2, y - 34, labelWidth, 24);
  ctx.fillStyle = '#8a3f00';
  ctx.font = '14px Arial';
  ctx.fillText(label, center - labelWidth / 2 + 10, y - 17);
}

function drawAngleBadge(ctx, x, y, label) {
  ctx.font = 'bold 13px Arial';
  const width = Math.max(ctx.measureText(label).width + 16, 44);
  const height = 24;

  ctx.fillStyle = '#ffedd5';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#fb923c';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = '#9a3412';
  ctx.font = 'bold 13px Arial';
  ctx.fillText(label, x + 8, y + 16);
}

function referenceLabel(referenceEnd) {
  return referenceEnd === 'far' ? 'End B' : 'End A';
}

function oppositeReferenceEnd(referenceEnd) {
  return referenceEnd === 'far' ? 'near' : 'far';
}

function fmt(value, rounding) {
  if (!Number.isFinite(value)) {
    return 'n/a';
  }
  return toNearestSixteenth(value);
}

function fmtAngle(value) {
  if (!Number.isFinite(value)) {
    return 'n/a';
  }
  const rounded = Math.round(value * 100) / 100;
  return (Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')) + '°';
}

function formatValue(value, rounding) {
  if (typeof value === 'number') {
    return fmt(value, rounding);
  }
  if (Array.isArray(value)) {
    return value.map(function (item) { return formatValue(item, rounding); }).join(', ');
  }
  if (value === null || value === undefined || value === '') {
    return 'n/a';
  }
  return String(value);
}

function toNearestSixteenth(value) {
  const rounded = Math.round(value * 16) / 16;
  const sign = rounded < 0 ? '-' : '';
  const absolute = Math.abs(rounded);
  let whole = Math.floor(absolute);
  const frac = absolute - whole;
  let sixteenths = Math.round(frac * 16);

  if (sixteenths === 16) {
    whole += 1;
    sixteenths = 0;
  }

  if (sixteenths === 0) {
    return sign + whole + ' in';
  }

  const divisor = gcd(sixteenths, 16);
  const num = sixteenths / divisor;
  const den = 16 / divisor;

  if (whole === 0) {
    return sign + num + '/' + den + ' in';
  }

  return sign + whole + ' ' + num + '/' + den + ' in';
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function roundNumber(value, digits) {
  const precision = typeof digits === 'number' ? digits : 2;
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

function parseNumber(value) {
  if (value === '' || value === null || value === undefined) {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseRequired(id, label) {
  const node = document.getElementById(id);
  const value = parseNumber(node ? node.value : null);
  if (value === null) {
    addMessage('error', label + ' is required.');
  }
  return value;
}

function parseOptional(id) {
  const node = document.getElementById(id);
  return node ? parseNumber(node.value) : null;
}

function addMessage(type, text) {
  const div = document.createElement('div');
  div.className = 'message ' + type;
  div.textContent = text;
  el.messages.appendChild(div);
}

function clearMessages() {
  el.messages.innerHTML = '';
}

function syncDataEditor() {
  el.dataEditor.value = JSON.stringify(state.data, null, 2);
}

function saveDataEditor() {
  try {
    const parsed = JSON.parse(el.dataEditor.value);
    validateDataShape(parsed);
    state.data = parsed;
    localStorage.setItem('conduitBenderData', JSON.stringify(parsed));
    populateConduitTypes();
    renderDynamicFields();
    addMessage('info', 'Conduit / bender data saved to localStorage.');
  } catch (error) {
    addMessage('error', 'Could not save data: ' + error.message);
  }
}

function loadSavedData() {
  try {
    const raw = localStorage.getItem('conduitBenderData');
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    validateDataShape(parsed);
    return parsed;
  } catch (error) {
    addMessage('warn', 'Saved data could not be loaded. Defaults were used instead.');
    return null;
  }
}

function loadSavedIntoEditor() {
  const saved = loadSavedData();
  if (!saved) {
    addMessage('warn', 'No saved conduit/bender data found in localStorage.');
    return;
  }
  state.data = saved;
  syncDataEditor();
  populateConduitTypes();
  renderDynamicFields();
  addMessage('info', 'Loaded saved conduit/bender data into the editor.');
}

function validateDataShape(data) {
  if (!data || typeof data !== 'object' || !data.conduitTypes) {
    throw new Error('Data must contain a conduitTypes object.');
  }
}

function resetForm() {
  el.calculatorForm.reset();
  clearMessages();
  populateConduitTypes();
  renderDynamicFields();
  state.lastResult = null;
  el.resultSummary.textContent = 'Enter values and calculate.';
  el.resultSummary.classList.add('empty');
  drawPlaceholder();
}

async function copyResult() {
  if (!state.lastResult) {
    addMessage('warn', 'Nothing to copy yet.');
    return;
  }

  const text = el.resultSummary.innerText;
  try {
    await navigator.clipboard.writeText(text);
    addMessage('info', 'Result copied to clipboard.');
  } catch (error) {
    addMessage('error', 'Could not copy result to clipboard.');
  }
}

function toDisplayKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (letter) { return letter.toUpperCase(); });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

initializeApp();
