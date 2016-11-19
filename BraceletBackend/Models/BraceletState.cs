﻿using System;

namespace BraceletBackend.Models
{
    public class BraceletState
    {
        public bool HasColor { get; set; }
        public string Color { get; set; }
        public DateTime NextVibration { get; set; }
    }
}