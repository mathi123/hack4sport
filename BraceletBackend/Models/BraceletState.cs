﻿using System;

namespace BraceletBackend.Models
{
    public class BraceletState
    {
        public bool HasColor { get; set; }
        public string Color { get; set; }
        public bool IsVibration { get; set; }
        public string VibrationInSeconds { get; set; }
        public string Text { get; set; }
    }
}